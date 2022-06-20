# FROM node:18-slim
FROM node:14-alpine AS build
# FROM arm32v7/node:14-alpine3.15
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN apk add --no-cache g++ python3 py3-pip make\
        && npm install --production && mv node_modules ../
# COPY . .



FROM node:14-slim
# FROM node:14-alpine
# FROM arm32v7/node:14-alpine3.15
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/node_modules /usr/src/node_modules
COPY --chown=node:node . /usr/src/app
COPY . .
EXPOSE 8080
CMD ["node", "--inspect=9229", "index.js"]






# # FROM node:18-slim
# FROM node:14-alpine
# # FROM arm32v7/node:14-alpine3.15
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN apk add --no-cache g++ python3 py3-pip make\
#         && npm install --production && mv node_modules ../

# # RUN apk del g++ python3 py3-pip make\
# #         && apk --purge del apk-tools

# COPY . .
# EXPOSE 8080
# CMD ["node", "--inspect=9229", "index.js"]
