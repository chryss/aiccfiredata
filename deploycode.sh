#!/bin/bash -l

rsync -avz --dry-run --files-from=filelist.txt . cwaigl@chinook.alaska.edu:/center1/d/UAFSMOKE/src/firemap/

read -p "Continue uploading files (y/N)? " confirm
if [ "$confirm" != "y" ]; then
    echo "Aborting"
    exit 1
fi

rsync -avz --files-from=filelist.txt  . cwaigl@chinook.alaska.edu:/center1/d/UAFSMOKE/src/firemap/
