#!/bin/bash -l

rsync -rldvz --update --ignore-existing --dry-run cwaigl@chinook.alaska.edu:/center1/d/UAFSMOKE/src/firemap/archive/*blmfiredata.txt archive/

read -p "Continue downloading files (y/N)? " confirm
if [ "$confirm" != "y" ]; then
    echo "Aborting"
    exit 1
fi

rsync -rldvz --update --ignore-existing cwaigl@chinook.alaska.edu:/center1/d/UAFSMOKE/src/firemap/archive/*blmfiredata.txt archive/
