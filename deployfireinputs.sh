#!/bin/bash -l

FILES='*'

if [ $# -ge 1 ]; then
	FILES=$1
fi

rsync -rldpvz --dry-run ./firesforwrf/$FILES cwaigl@chinook.alaska.edu:/center1/d/UAFSMOKE/dat/fires_data/FIRMS_MODIS/

read -p "Continue uploading files (y/N)? " confirm
if [ "$confirm" != "y" ]; then
    echo "Aborting"
    exit 1
fi

rsync -rldpvz ./firesforwrf/$FILES cwaigl@chinook.alaska.edu:/center1/d/UAFSMOKE/dat/fires_data/FIRMS_MODIS/
