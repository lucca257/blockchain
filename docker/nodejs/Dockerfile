FROM node:alpine

FROM node:alpine
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app
COPY ./package*.json /usr/src/app/
RUN npm install
COPY ./ /usr/src/app/
EXPOSE 8888
CMD [ "node", "app.js" ]