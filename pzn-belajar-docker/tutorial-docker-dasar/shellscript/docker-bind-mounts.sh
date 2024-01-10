
docker container create --name mongodata --publish 27018:27017 --mount "type=bind,source=D:/Programs/pzn/belajar-docker/tutorial-docker-dasar/mongo-data,destination=/data/db" --env MONGO_INITDB_ROOT_USERNAME=arfani --env MONGO_INITDB_ROOT_PASSWORD=arfani mongo:latest
