#!/bin/bash
set -e

#Navigate back a directory to the console app
cd ../

#Build a docker container locally with the current project
docker build -t nodetypescript .
#Tag the container
docker tag nodetypescript seanraff89/nodetypescript
#Push the container to my personal hub with latest param
docker push seanraff89/nodetypescript:latest
