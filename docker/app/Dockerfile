FROM node:alpine

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]