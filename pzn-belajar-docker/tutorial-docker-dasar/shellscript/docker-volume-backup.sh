
docker container stop mongovolume

docker container create --name nginxbackup --mount "type=bind,source=D:/Programs/pzn/belajar-docker/tutorial-docker-dasar/backup,destination=/backup" --mount "type=volume,source=mongodata,destination=/data" nginx:latest

docker container start nginxbackup

docker container exec -i -t nginxbackup /bin/bash

tar cvf /backup/backup.tar.gz /data

docker container stop nginxbackup

docker container rm nginxbackup

docker container start mongovolume

docker image pull ubuntu:latest

## lakukan perintah ini untuk backup volume

docker container stop mongovolume

docker container run --rm --name ubuntubackup --mount "type=bind,source=D:/Programs/pzn/belajar-docker/tutorial-docker-dasar/backup,destination=/backup" --mount "type=volume,source=mongodata,destination=/data" ubuntu:latest tar cvf /backup/backup-lagi.tar.gz /data

docker container start mongovolume
