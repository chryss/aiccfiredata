#!/bin/bash -l
# Download new firedata, re-generate web site

module load python
source activate py36_uafsmoke
python /center1/d/UAFSMOKE/src/firemap/updateblmdata.py
python /center1/d/UAFSMOKE/src/firemap/blmfire.py
source deactivate
