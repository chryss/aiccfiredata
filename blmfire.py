#!/usr/bin/env python
# encoding: utf-8
"""
blmfire.py

Created by Chris Waigl on 2011-06-08. chris.waigl@gi.alaska.edu

"""

from __future__ import division
from future import standard_library
standard_library.install_aliases()
from builtins import zip
from io import open
import sys
import os, shutil
import urllib.request
import logging, logging.handlers
from datetime import datetime
import time
import json

# Data sources
FIREFILE = 'blmfiredata.txt'
FIREURL =   "https://afsmaps.blm.gov/wmsconnector/com.esri.wms.Esrimap?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&SRS=EPSG:4326&BBOX=-180,50,-130,70&WIDTH=1&HEIGHT=1&LAYERS=wmsactivefires&QUERY_LAYERS=wmsactivefires&STYLES=&EXCEPTIONS=application/vnd.ogc.se_xml&&INFO_FORMAT=text/plain&FEATURE_COUNT=100&X=0&Y=0"

FIELDMAP = {
    'designation':              'firesadmin.fire.name',
    'structuresburned':         'firesadmin.fire.structuresburned',
    'structuresthreatened':     'firesadmin.fire.structuresthreatened',
    'numberpeople':             'firesadmin.dailyfirerecord.numberpeople',
    'acreage':                  'firesadmin.fire.estimatedtotalacres',
    'cause':                    'firesadmin.fire.generalcause',
    'primaryfueltype':          'firesadmin.fire.primaryfueltype',
    'maintext':                 'firesadmin.dailyfirerecord.summary',
    'latitude':                 'firesadmin.fire.latitude',
    'longitude':                'firesadmin.fire.longitude'
}

# Any HTML and JavaScript paths, files and templates are indicated here
FIRETEMPLATE = 'templates/firetemplate.js'
HTMLTEMPLATE = 'templates/current_fires_template.js'
PROJECTPATH = '/datadir/UAFSMOKE/src/firemap/'
HTMLOUT = 'current_fires.js'
SITELOCATION = '/projects/UAFSMOKE/public_html/'
DEPLOYLOCATION = 'js/'

# Deploy resulting file(s) to web root?
DEPLOY = True

# Logging configuration
VERBOSE = True
LOGDIR = 'log'
LOGFILE = 'firemap.log'

# Simple logging to file
log = logging.getLogger('blmfire')
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

def get_raw_fire_data():
    """
    Returns list of lines from BLM, either from file or URL
    """
    log.info("Attempting to retrieve data from file...")
    try:
        filehandle = open(FIREFILE, encoding='utf-8')
        data = filehandle.read()
        if len(data) == 0:
            raise(IOError("Empty file."))
        log.info("...success!")
    except IOError as detail:
        log.warning("Could not open %s: %s" % (FIREFILE, detail))
        log.info("Attempting to retrieve URL for fire data...")
        filehandle = urllib.request.urlopen(FIREURL)
        data = filehandle.read().decode('utf-8')
        log.info("...success!")
    
    return data.splitlines()

def sanitize_dataline(rawstring, blanks=2, quotechars='"_', lower=False):
    """
    Returns list of lc stripped header field names.
    
    Assumptions: separator = '   ' (n spaces), trailing separator and double quote at end.
    """
    stripchars = quotechars + ' \n\r\t'
    splitstring = '"' + ' ' * blanks + '"'
    choplength = (-1) * (blanks + 1)
    return [sanitize_fieldvalue(fieldname, stripchars, lower) for fieldname in rawstring[:choplength].split(splitstring)]

def sanitize_fieldvalue(rawfield, stripchars, lower=False):
    """
    Returns sanitised individual field value. Strips quotes from end, replaces at middle, turns into LC
    """
    result = rawfield.strip(stripchars)
    result = result.replace('"', "'")
    result = result.replace("'", r"\'")
    if lower:
        result = result.lower()
    return result

def get_firedata(fieldnames, rawdata):
    """
    Returns list of dictionaries from raw CSV data as per BLM web service
    """
    data = []
    for item in rawdata:
        if not len(fieldnames)==len(item):
            log.error("An item has %d elements, but there are %d fields.\nitem: %s" % (len(item), len(fieldnames), ', '.join(item)))
        else:
            fire = {}
            for header, value in zip(fieldnames, item):
                fire[header] = value
            # fix temporary 2015 issue
            if fire['firesadmin.fire.name'] != "Rex Complex":
                data.append(fire)
    return data

def select_relevant_values(dictlist):
    """
    Rewrite fire data to fit what is needed for Google map
    """
    firevalues = []
    for item in dictlist:
        firedata = {}
        for field in FIELDMAP:
            try:
                firedata[field] = item[FIELDMAP[field]]
            except KeyError:
                firedata[field] = None
        if not firedata['acreage']:
            firedata['acreage'] = 0
        firedata['lastupdated'] = datetime.strftime(
            datetime.fromtimestamp(int(item['firesadmin.fire.lastupdatetime'])//1000), '%d %b %Y, %H:%M'
        )
        firedata['discovered'] = datetime.strftime(
            datetime.fromtimestamp(int(item['firesadmin.fire.discoverydatetime'])//1000), '%d %b %Y, %H:%M'
        )
#        extratext = ''
        firevalues.append(firedata)
    log.info("Generated Google Maps JavaScript for %d current fires." % len(firevalues))
    return firevalues

def fill_template(firelist, template=FIRETEMPLATE):
    """
    Iterates over list of dictionaries, reads template and fills it for each fire dictionary. Returns JavaScript code. 
    """
    js_code = ''
    js_template = open(os.path.join(PROJECTPATH, template), encoding='utf-8').read()
    for fire in firelist:
        js_code += js_template % fire
    return js_code
    
def fill_html(fires, template=HTMLTEMPLATE, outfile=HTMLOUT):
    """
    Generates web page
    """
    repdict = {
        'firelist': fires,
        'date': datetime.strftime(datetime.now(), '%d %b %Y, %H:%M')
    }
    html_template = open(os.path.join(PROJECTPATH, template), encoding='utf-8').read()
    outfile = os.path.join(PROJECTPATH, outfile)
    html_out = open(outfile, 'w')
    html_markup = html_template % repdict
    html_out.write(html_markup)
    html_out.close()
    os.chmod(outfile, 0o664)
    log.info("Wrote current firedata into %s." % outfile)
    return outfile

def deploy_map(filename=HTMLOUT, location=SITELOCATION):
    """
    Copies generated file to live file system location of web site
    """
    log.info("Attempting to deploy file %s to location %s." % (filename, location))
    filename = os.path.join(PROJECTPATH, filename) 
    try:
        shutil.copy(filename, location)
        log.info("...success!")
    except Exception as detail:
        log.error("Copy operation failed: %s" % detail)
        exit(1)
        

def main():

    # change into working directory and get data
    os.chdir(PROJECTPATH)
    data = get_raw_fire_data()
    fieldnames = sanitize_dataline(data[0], blanks=3, lower=True)
    rawdata = [sanitize_dataline(item.strip(), blanks=2, lower=False) for item in data[1::2]]
    
    # the transformed data will be a list of dictionaries
    data = get_firedata(fieldnames, rawdata)
    finalfirelist = select_relevant_values(data)
    
    fires = fill_template(finalfirelist)
    outfile = fill_html(fires)
    if DEPLOY:
        deployto = os.path.join(SITELOCATION, DEPLOYLOCATION)
        deploy_map(location=deployto)

if __name__ == '__main__':
    main()

