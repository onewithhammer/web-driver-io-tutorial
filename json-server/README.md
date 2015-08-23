This is the README for the Web Driver IO Tutorial json-server directory

This directory contains a json data file (db.json) with data for an Example Order System.
It also contains a db-bak.json file which is a copy of db.json file.  The json-server will
update the db.json file so it is convenient to have a backup of the file.


## RESTORE DATA
Stop json-server
```
$ cp db-bak.json db.json
```
Start json-server
```
$ json-server db.json
```

See restAPIExample1.js for test script that uses this data.

