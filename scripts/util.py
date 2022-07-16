#!/usr/bin/env python
# Li Xue
# 15-Dec-2020 20:11

import string
import re
import pdb
all_letters = string.ascii_letters
periods = '，。；！'

def rm_period(sentence):
    # remove Chinese Biao Dian
    pattern = f"[{periods}]"
    sentence = re.sub(pattern, ' ', sentence)
    return sentence
def is_chinese(sentence):
    ans = 0
    tmp = [ c for c in sentence if c in all_letters]
    if len(tmp) == 0:
        # yes, chinese
        ans = 1
    return ans

def clean_lyrics(song):
    song.lyrics_main = rm_period(song.lyrics_main)
    song.lyrics_minor = rm_period(song.lyrics_minor)
    return song





