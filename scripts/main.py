#!/usr/bin/env python
# Li Xue
#  9-Apr-2023 15:15
#
# Take input from Service_Program.html
# Parse them and send them to individual python files
import sys
import json

response = sys.argv[1] # a Json string. person = '{"name": "Bob", "languages": ["English", "French"]}'
res_dict = json.loads(response)
print(res_dict.keys())
