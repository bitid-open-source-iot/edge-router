docker stop edge-router && docker rm edge-router && docker rmi $(docker images 'shanebowyer/edge-router:master' -a -q) && 
sudo docker pull --platform linux/arm64 shanebowyer/edge-router:master && 
sudo docker run -d --restart always -p 8080:8080 \
-v /edge-router/config.json:/usr/src/app/config.json \
--network="host" \
--name edge-router \
--platform linux/arm64 shanebowyer/edge-router:master
