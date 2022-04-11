FROM node:alpine

RUN apk add --no-cache bash shadow

RUN echo "PS1='\s-\v \$PWD \$ '" >> /home/node/.bashrc \
    && mkdir /docker && chown node:node /docker \
    && mkdir /home/node/app && chown node:node /home/node/app \
    && usermod -u 1000 node

WORKDIR /home/node/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

USER node
EXPOSE 3000
CMD ["npm", "start"]