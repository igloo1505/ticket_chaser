import json
import os
from pathlib import Path
import os.path as _path

asString = "/Users/bigsexy/Desktop/currentProjects/paidWork/ticket_chaser/data/server/statesCities.json"

# p = _path.abspath(Path("../../data/server/statesCities.json"))
# print(f"""p: {p}""")

newData = {}

file = open(asString, "r")

data = json.load(file)

file.close()


for d in data:
    if d['country_id'] == 233:
        print(f"""d: {d}""")
        newData[d['name']] = d

targetFile = open("/Users/bigsexy/Desktop/currentProjects/paidWork/ticket_chaser/data/server/USOnly.json", "w")
json.dump(newData, targetFile)
targetFile.close()
