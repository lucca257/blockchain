FROM node:alpine

RUN mkdir -p /home/node/app//node_modules && chown -R node:node /home/node/app/

WORKDIR /home/node/app/
COPY ["package.json", "package-lock.json", "./"]

EXPOSE 3000
RUN npm install --save-dev hardhat
CMD [ "node", "app.js" ]