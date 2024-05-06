# Project

# Need to enable docker experimental feature
sudo nano /etc/docker/daemon.json
{
    "experimental": true,
    "data-root": "/media/sda1/docker",
    "debug": true
}


docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 --push -t shanebowyer/edge-router:master .


NOTE that if you have issues with buildx rerun this
docker run --privileged --rm tonistiigi/binfmt --install all

# Testing modbus

## Read 101
watch modpoll -p 5002 -l1000 -t4 -r 101 -c 5 -1 10.18.80.17
## Write 101
modpoll -p 5002 -t4 -r 101 -c 1 10.18.80.17 1


# Daviteq sigfox level callback config
{
  "device" : "{device}",
  "deviceType" : "daviteqUltrasonic",
  "type" : "2",
  "data" : "{data}",
  "time" : "{time}",
  "linkquality" : "{linkQuality}"
}