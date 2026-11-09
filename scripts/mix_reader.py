"""Read-only Westwood MIX / SHP-TS / PAL decoding for local asset collection.

Binary layouts checked against the OpenRA format readers. Independent Python
implementation; uses the existing Python OpenSSL DLL rather than bundling crypto.
"""
import base64
import ctypes
import mmap
import struct
import sys
import zlib
from pathlib import Path



def mix_hash(name):
    text = name.upper().encode('ascii')
    tail = len(text) % 4
    if tail:
        text += bytes([tail]) + text[len(text) - tail:len(text) - tail + 1] * (3 - tail)
    return zlib.crc32(text) & 0xffffffff


class Blowfish:
    def __init__(self, block):
        modulus = int.from_bytes(base64.b64decode(
            'AihRvNoIbTn85FZRYNZRcT+i6KpU+maCsEqr3Q5q+LDB5tH7Tz2qQ38V')[2:], 'big')
        width = (modulus.bit_length() - 2) // 8
        key = b''.join(pow(int.from_bytes(block[i:i + width + 1], 'little'), 65537, modulus)
                       .to_bytes(width + 1, 'little')[:width]
                       for i in range(0, len(block), width + 1))[:56]
        self.lib = ctypes.CDLL(str(Path(sys.prefix) / 'DLLs/libcrypto-3.dll'))
        self.schedule = (ctypes.c_uint32 * 1042)()
        self.lib.BF_set_key.argtypes = [ctypes.c_void_p, ctypes.c_int, ctypes.c_void_p]
        self.lib.BF_ecb_encrypt.argtypes = [ctypes.c_void_p, ctypes.c_void_p, ctypes.c_void_p, ctypes.c_int]
        self.lib.BF_set_key(self.schedule, len(key), key)

    def decrypt(self, data):
        result = bytearray()
        for i in range(0, len(data), 8):
            output = ctypes.create_string_buffer(8)
            self.lib.BF_ecb_encrypt(bytes(data[i:i + 8]), output, self.schedule, 0)
            result.extend(output.raw)
        return bytes(result)


class Mix:
    def __init__(self, data, source):
        self.data, self.source = data, source
        offset = 0 if struct.unpack_from('<H', data)[0] else 4
        flags = struct.unpack_from('<I', data)[0] if offset else 0
        if flags & 0x20000:
            fish = Blowfish(bytes(data[4:84]))
            count = struct.unpack_from('<H', fish.decrypt(data[84:92]))[0]
            padded = ((6 + count * 12 + 7) // 8) * 8
            header = fish.decrypt(data[84:84 + padded])
            self.start = 84 + padded
        else:
            count = struct.unpack_from('<H', data, offset)[0]
            header = data[offset:offset + 6 + 12 * count]
            self.start = offset + 6 + 12 * count
        size = struct.unpack_from('<I', header, 2)[0]
        if self.start + size > len(data):
            raise ValueError('MIX data exceeds archive: ' + source)
        self.entries = {}
        for i in range(count):
            key, position, length = struct.unpack_from('<III', header, 6 + i * 12)
            if position + length > size:
                raise ValueError('MIX entry exceeds data: ' + source)
            self.entries[key] = (self.start + position, length)

    @classmethod
    def open(cls, path):
        with Path(path).open('rb') as stream:
            data = mmap.mmap(stream.fileno(), 0, access=mmap.ACCESS_READ)
        return cls(data, str(path))

    def get(self, name):
        entry = self.entries.get(mix_hash(name))
        if entry is None:
            return None
        position, length = entry
        return bytes(self.data[position:position + length])



