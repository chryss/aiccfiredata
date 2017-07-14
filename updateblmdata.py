#!/usr/bin/env python
# encoding: utf-8
"""
updatebmldata.py

Update cached firedata from BLM
Created by Chris Waigl on 2011-06-14.

CHANGELOG:
2012-05-14: Add logging to file, archiving of old data
2013-04-17: Change file paths after decommissioning of /datadir. Restart cron jobs.
"""

from future import standard_library
standard_library.install_aliases()
from io import open
import sys
import os
import shutil

from datetime import datetime
import time
import urllib.request
import logging, logging.handlers
import json

# File path configuration
FIREURL = "https://afsmaps.blm.gov/wmsconnector/com.esri.wms.Esrimap/AFSFires?REQUEST=GetFeatureInfo&VERSION=1.1.1&SRS=EPSG:4326&QUERY_LAYERS=wmsactivefires&WIDTH=1&HEIGHT=1&INFO_FORMAT=text/plain&BBOX=-180,50,-130,70&X=0&Y=0&FEATURE_COUNT=500"
FIREFILE = 'blmfiredata.txt'
PROJECTPATH = '/center1/d/UAFSMOKE/src/firemap/'
ARCHIVEDIR = 'archive'

# Logging configuration
VERBOSE = True
LOGDIR = 'log'
LOGFILE = 'firemap.log'


# Simple logging to file
log = logging.getLogger('updateblmdata')
log.setLevel(logging.DEBUG)
logto = os.path.join(PROJECTPATH, LOGDIR, LOGFILE)
handler = logging.handlers.TimedRotatingFileHandler(filename=logto, when='D', interval=1, backupCount=20)
console = logging.StreamHandler()
if VERBOSE:
    handler.setLevel(logging.DEBUG)
else:
    handler.setLevel(logging.WARNING)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
log.addHandler(handler)

def update_raw_fire_data():
    """
    Writes out list of lines from BLM to file, if new
    """
    log.info("Attempting to retrieve data from BLM site...")
    try:
        with urllib.request.urlopen(FIREURL) as urlhandle:
            datahandle = urlhandle.read().decode('utf-8')
        log.info("...success!")
    except Exception as detail:
        log.error("Could not open %s: %s" % (FIREURL, detail))
        exit(1)
    outfilename = os.path.join(PROJECTPATH, FIREFILE)

    # if file exists: a) compare old and new, b) archive old if new is different
    if os.path.exists(outfilename):
        olddata = open(outfilename, encoding='utf-8').read()
        if olddata == datahandle:
            log.info("No new data, keeping old file")
            return
        else:
            #archive old file
            datestamp = datetime.utcnow().strftime('%Y%m%d_%H%M%S')
            archiveto = "%s_%s" % (datestamp, FIREFILE)
            archivepath = os.path.join(PROJECTPATH, ARCHIVEDIR, archiveto)
            shutil.copyfile(outfilename, archivepath)
            os.chmod(archivepath, 0o660)
            log.info("Old data archived to %s." % archivepath)
    # write new data to file
    try:
        with open(os.path.join(PROJECTPATH, FIREFILE), 'w') as fileouthandle:
            fileouthandle.write(datahandle)
        log.info("Writing new data to file %s" % FIREFILE)
    except Exception as detail:
        log.error("Could not write to file %s. Exiting." % FIREFILE)
        exit(1)
    try:
        os.chmod(outfilename, 0o660)
    except Exception as error:
        log.critical("*** %s: %s" % (type(error).__name__, error))

def main():
    os.chdir(PROJECTPATH)
    update_raw_fire_data()

if __name__ == '__main__':
    main()
