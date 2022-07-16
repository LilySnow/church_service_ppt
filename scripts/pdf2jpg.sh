#!/usr/bin/env bash
# Li Xue
# 24-Sep-2021 09:43

# split pdf file into multiple jpg files

uploadedFL=$1
des_DIR=$2

[ ! -d $des_DIR ] && mkdir -p $des_DIR
cp $uploadedFL $des_DIR

# method 2
# convert pdf to images: https://superuser.com/questions/1469592/how-can-i-convert-a-pdf-into-a-series-of-images-jpgs-or-pngs-via-the-terminal
#  gs -o xue_%03d.jpg -sDEVICE=jpg  -r3000 -dTextAlphaBits=4  20210817_data_health_check_xue.pdf

# method 3:slow
pdfFL=$uploadedFL
convert -density 400 $pdfFL -resize 2000x1500 $des_DIR/preach_%d.jpg


# method 1: fast but only pdf-> pdf
#pdfseparate $uploadedFL $des_DIR/preach_%d.pdf


