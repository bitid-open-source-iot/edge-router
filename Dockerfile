FROM node:14-alpine
# FROM arm32v7/node:14-alpine3.15
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN apk add --no-cache g++ python3 py3-pip make\
        && npm install --production && mv node_modules ../
COPY . .
EXPOSE 8080
CMD ["node", "--inspect=9229", "index.js"]
