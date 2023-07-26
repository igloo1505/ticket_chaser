import json


file = open(
    "/Users/bigsexy/Desktop/currentProjects/paidWork/ticket_chaser/data/server/USOnly.json", "r")

data = json.load(file)

names = ""
abbrev = ""
asClass = ""

for n in data:
#     asClass += f"""
# {{ name: "{data[n]['name']}", abbrev: "{data[n]['state_code']}" }},"""
#     names += f"""
# {data[n]['name']}"""
    abbrev += f"""
{data[n]['state_code']}"""

print(abbrev)
