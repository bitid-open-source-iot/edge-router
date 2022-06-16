# Project


docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 --push -t shanebowyer/edge-router:master .


NOTE that if you have issues with buildx rerun this
docker run --privileged --rm tonistiigi/binfmt --install all