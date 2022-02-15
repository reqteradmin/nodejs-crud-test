 #! /bin/bash

 docker build -f Dockerfile -t my-api-server:latest . 
 docker-compose pull
 docker-compose up -d
