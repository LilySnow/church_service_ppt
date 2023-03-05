#!/usr/bin/env python
# Li Xue
# 13-Dec-2020 16:26

import sys
import re
from Song import *
from util import *
import json

response = sys.argv[1] # a Json string. person = '{"name": "Bob", "languages": ["English", "French"]}'
res_dict = json.loads(response)
title_a = res_dict['song_title_main']
title_b = res_dict['song_title_minor']
lyrics_a = res_dict['lyrics_main']
lyrics_b = res_dict['lyrics_minor']
mdFL = 'slides/service.md'

song1 = Song(title_a, title_b, lyrics_a, lyrics_b)
song1.mkdw_gen(mdFL)



