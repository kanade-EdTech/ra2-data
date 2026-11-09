"""Build a runtime-only directory and ZIP for Toy preview."""
import hashlib
import json
import shutil
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RELEASE = ROOT / 'release'
SITE = RELEASE / 'ra2-data-preview'
ARCHIVE = RELEASE / 'ra2-data-preview.zip'
files = [Path('index.html')]
files.extend(path.relative_to(ROOT) for path in sorted((ROOT / 'assets').rglob('*')) if path.is_file())
files.extend(path.relative_to(ROOT) for path in sorted((ROOT / 'ra2-conghangdaola-mainboard/images').rglob('*')) if path.is_file())
files.extend([Path('data/all-unit-stats.md'), Path('data/all-unit-weapons.md')])
RELEASE.mkdir(parents=True, exist_ok=True)
with zipfile.ZipFile(ARCHIVE, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
    for relative in files:
        source = ROOT / relative
        destination = SITE / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)
        archive.write(source, relative.as_posix())
summary = {'archive': str(ARCHIVE), 'files': len(files), 'bytes': ARCHIVE.stat().st_size,
           'sha256': hashlib.sha256(ARCHIVE.read_bytes()).hexdigest(), 'slug': 'ra2-data'}
(RELEASE / 'package.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps(summary, ensure_ascii=False, indent=2))
