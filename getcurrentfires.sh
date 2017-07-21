#!/bin/bash -l

rsync -rldvz --dry-run cwaigl@chinook.alaska.edu:/center1/d/UAFSMOKE/src/firemap/archive/*blmfiredata.txt archive/

read -p "Continue uploading files (y/N)? " confirm
if [ "$confirm" != "y" ]; then
    echo "Aborting"
    exit 1
fi

rsync -rldvz cwaigl@chinook.alaska.edu:/center1/d/UAFSMOKE/src/firemap/archive/*blmfiredata.txt archive/
