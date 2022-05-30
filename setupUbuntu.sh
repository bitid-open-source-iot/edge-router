#!/bin/bash


echo "REMOVING DOCKER"

sudo apt-get remove docker docker-engine docker.io containerd runc


echo "INSTALLING DOCKER"

sudo apt-get update

sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release


sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin


echo "INSTALLING DOCKER COMPLETED"

sudo groupadd docker

echo "ADDING USER TO DOCKER GROUP"
sudo gpasswd -a $USER docker
#sudo su $USER
# exec su -l $USER



echo "INSTALLING MOSQUITTO"


sudo mkdir /rockwell

sudo rm /rockwell/mosquitto.conf

echo 'port 1888'  | sudo tee -a /rockwell/mosquitto.conf
echo 'allow_anonymous false'  | sudo tee -a /rockwell/mosquitto.conf
echo 'password_file /mosquitto/config/passwd'  | sudo tee -a /rockwell/mosquitto.conf



echo 'unittest:$6$9/dfMuN9hX4hYDV0$RhF8R4eX5FDAqQ+9L3D5qyHG9P9NXzxLIHUyfi4oXSJIk5/RndeQUZzrZyZ1/NgE57e9/SiofqTS9ICEqzeDUw=='  | sudo tee /rockwell/passwd


echo "STARTING MOSQUITTO DOCKER IMAGE"
sudo docker run -d --restart always -p 1888:1888 -v /rockwell/mosquitto.conf:/mosquitto/config/mosquitto.conf -v /rockwell/passwd:/mosquitto/config/passwd eclipse-mosquitto



echo "DOWNLOADING FILES"

sudo wget "https://docs.google.com/uc?export=download&id=1LekZrj9igeA5klyyuCzl77aevxotBKNP" -O /rockwell/config.json


sudo docker run -d --restart always -p 8080:8080 -v /rockwell/config.json:/usr/src/app/config.json \
--network="host" \
shanebowyer/edge-router:latest


# sudo docker run -it -p 8080:8080 -v /rockwell/config.json:/usr/src/app/config.json \
# --network="host" \
# -e BITID_SERVER_MOSQUITTO_USERNAME="xxx" \
# -e BITID_SERVER_MOSQUITTO_PASSWORD="xxx" \
# -e BITID_LOCALROUTERS_MOSQUITTO_USERNAME="xxx" \
# -e BITID_LOCALROUTERS_MOSQUITTO_PASSWORD="xxx" \
# shanebowyer/edge-router:latest