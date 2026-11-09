"""Verify the generated bundle against every source field and local image."""
import json
from collections import Counter
from pathlib import Path
from importlib.util import spec_from_file_location, module_from_spec

ROOT = Path(__file__).resolve().parents[1]
spec = spec_from_file_location("build_data", ROOT / "scripts/build-data.py")
builder = module_from_spec(spec)
spec.loader.exec_module(builder)
expected = builder.load_payload()
bundle = (ROOT / "assets/data/database.js").read_text(encoding="utf-8-sig")
prefix = "window.RA2_DATA = "
assert bundle.startswith(prefix) and bundle.rstrip().endswith(";")
actual = json.loads(bundle[len(prefix):].rstrip().removesuffix(";"))
assert actual == expected, "The bundle differs from its source CSV or JSON"
assert len(actual["units"]) == 968
assert len(actual["weapons"]) == 558
assert len(actual["images"]) == 216
assert Counter(row["版本"] for row in actual["units"]) == {"ra2": 409, "yr": 559}
assert Counter(row["版本"] for row in actual["weapons"]) == {"ra2": 232, "yr": 326}
assert Counter(row["版本"] for row in actual["units"]
               if row["定义状态"] == "注册但无定义") == {"ra2": 6, "yr": 6}
for group, fields in [("units", ["版本", "ID"]), ("weapons", ["版本", "类别", "ID"])]:
    keys = [tuple(row[field].upper() for field in fields) for row in actual[group]]
    assert len(keys) == len(set(keys)), group + " has duplicate business keys"
unit_keys = {(row["版本"], row["ID"]) for row in actual["units"]}
for row in actual["catalog"] + actual["images"]:
    assert (row["version"], row["gameId"].upper()) in unit_keys
for row in actual["images"]:
    assert (ROOT / "ra2-conghangdaola-mainboard" / row["exportImage"]).is_file()
for name in ["allied", "soviet", "yuri", "neutral"]:
    assert (ROOT / "ra2-conghangdaola-mainboard/images/assets/factions" / (name + ".png")).is_file()
for version in ["ra2", "yr"]:
    units = {row["ID"]: row for row in actual["units"] if row["版本"] == version}
    combat = {row["ID"]: row for row in actual["weapons"] if row["版本"] == version}
    assert [units["MTNK"][field] for field in ["COST", "STRENGTH", "SPEED", "SIGHT"]] == ["700", "300", "7", "8"]
    assert [combat["105MM"][field] for field in ["DAMAGE", "RANGE", "ROF"]] == ["65", "5", "60"]
    assert [combat["REDEYE2"][field] for field in ["DAMAGE", "RANGE", "ROF"]] == ["75", "12", "55"]
    assert units["NASAM"]["ROT"] == ("" if version == "ra2" else "8")
print("PASS: every source field matches the generated bundle")
print("PASS: 968 units, 558 combat records, 216 image mappings, 12 undefined entries")
print("PASS: unique business keys, metadata joins, local images, known reference values")

