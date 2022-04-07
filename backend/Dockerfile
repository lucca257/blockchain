FROM node:alpine

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]