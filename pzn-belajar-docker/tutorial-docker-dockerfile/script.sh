# FROM Intruction
docker build -t arfanidocker/from from

# RUN Instruction
docker build -t arfanidocker/run run

docker build -t arfanidocker/run run --progress=plain --no-cache

# CMD Instruction
docker build -t arfanidocker/command command

docker image inspect arfanidocker/command

docker container create --name command arfanidocker/command

docker container start command

docker container logs command

# LABEL Instruction
docker build -t arfanidocker/label label

docker image inspect arfanidocker/label

# ADD Instruction
docker build -t arfanidocker/add add

docker container create --name add arfanidocker/add

docker container start add

docker container logs add

# ADD Instruction
docker build -t arfanidocker/copy copy

docker container create --name copy arfanidocker/copy

docker container start copy

docker container logs copy

# .dockerignore
docker build -t arfanidocker/ignore ignore

docker container create --name ignore arfanidocker/ignore

docker container start ignore

docker container logs ignore

# EXPOSE Instruction
docker build -t arfanidocker/expose expose

docker image inspect arfanidocker/expose

docker container create --name expose -p 8080:8080 arfanidocker/expose

docker container start expose

docker container ls

docker container stop expose

# ENV Instruction
docker build -t arfanidocker/env env

docker image inspect arfanidocker/env

docker container create --name env --env APP_PORT=9090 -p 9090:9090 arfanidocker/env

docker container start env

docker container ls

docker container logs env

docker container stop env

# Volume Instruction
docker build -t arfanidocker/volume volume

docker image inspect arfanidocker/volume

docker container create --name volume -p 8080:8080 arfanidocker/volume

docker container start volume

docker container logs volume

docker container inspect volume

#feb5693c63329f00a5b91df8934ccaa0605acb8fe4f5b8746aa0943a764f7825

docker volume ls

# WORKDIR Instruction
docker build -t arfanidocker/workdir workdir

docker container create --name workdir -p 8080:8080 arfanidocker/workdir

docker container start workdir

docker container exec -i -t workdir /bin/sh

# USER Instruction
docker build -t arfanidocker/user user

docker container create --name user -p 8080:8080 arfanidocker/user

docker container start user

docker container exec -i -t user /bin/sh

# ARG Instruction
docker build -t arfanidocker/arg arg --build-arg app=pzn

docker container create --name arg -p 8080:8080 arfanidocker/arg

docker container start arg

docker container exec -i -t arg /bin/sh

# HEALTHCHECK Instruction
docker build -t arfanidocker/health health

docker container create --name health -p 8080:8080 arfanidocker/health

docker container start health

docker container ls

docker container inspect health

# ENTRYPOINT Instruction
docker build -t arfanidocker/entrypoint entrypoint

docker image inspect arfanidocker/entrypoint

docker container create --name entrypoint -p 8080:8080 arfanidocker/entrypoint

docker container start entrypoint

# Multi Stage Build
docker build -t arfanidocker/multi multi

docker image ls | Select-String "arfanidocker"

docker container create --name multi -p 8080:8080 arfanidocker/multi

docker container start multi

# Docker Push
docker tag arfanidocker/multi registry.digitalocean.com/programmerzamannow/multi

docker --config /Users/arfanidocker/.docker-digital-ocean/ push registry.digitalocean.com/programmerzamannow/multi

docker --config /Users/arfanidocker/.docker-digital-ocean/ pull registry.digitalocean.com/programmerzamannow/multi