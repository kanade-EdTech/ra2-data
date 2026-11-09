"""Build the browser data bundle from the local CSV and catalog sources."""
import csv
import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read_csv(name):
    with (ROOT / "data" / name).open(encoding="utf-8-sig", newline="") as stream:
        return list(csv.DictReader(stream))


def read_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8-sig"))


def load_payload():
    manifest = read_json("ra2-conghangdaola-mainboard/manifest.json")
    return {
        "units": read_csv("all-unit-stats.csv"),
        "weapons": read_csv("all-unit-weapons.csv"),
        "catalog": read_json("data/runtime-unit-catalog.json"),
        "images": manifest["items"],
        "verifications": read_json("data/chrono-ivan-verification.json"),
    }


def main():
    payload = load_payload()
    for name, fields in [("units", ["版本", "ID"]), ("weapons", ["版本", "类别", "ID"])]:
        keys = [tuple(row[field].upper() for field in fields) for row in payload[name]]
        if len(keys) != len(set(keys)):
            raise ValueError("Duplicate business keys in " + name)
    output = ROOT / "assets" / "data" / "database.js"
    output.parent.mkdir(parents=True, exist_ok=True)
    body = "window.RA2_DATA = " + json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + ";\n"
    temporary = output.with_suffix(".js.tmp")
    try:
        temporary.write_text(body, encoding="utf-8")
        os.replace(temporary, output)
    finally:
        temporary.unlink(missing_ok=True)
    print(f"Built {len(payload['units'])} units, {len(payload['weapons'])} combat records, "
          f"{len(payload['images'])} image mappings")


if __name__ == "__main__":
    main()

