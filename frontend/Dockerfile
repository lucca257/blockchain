FROM node:alpine

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /home/node/app

RUN npm init -y
 COPY . .
# COPY ["package.json", "package-lock.json", "./"]
# RUN npm install -g create-react-app
# COPY . .

# EXPOSE 3000
# CMD [ "node", "app.js" ]