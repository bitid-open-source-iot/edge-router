FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
RUN npm install --production && mv node_modules ../

# RUN apk add --no-cache --virtual .gyp \
#         python \
#         make \
#         && npm install --production && mv node_modules ../

COPY . .
EXPOSE 8080
CMD ["node", "--inspect=9229", "index.js"]
