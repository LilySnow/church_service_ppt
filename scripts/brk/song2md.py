#!/usr/bin/env python
# Li Xue
# 13-Dec-2020 16:26

import sys
import re
from Song import *
from util import *
import json

response = sys.argv[1]
res_dict = json.loads(response)
title_main = sys.argv[1]
title_minor = sys.argv[2]
main = sys.argv[3]
minor = sys.argv[4]
mdFL = 'slides/song1.md'

song1 = Song(title_main, title_minor, main, minor)
song1.mkdw_gen(mdFL)



