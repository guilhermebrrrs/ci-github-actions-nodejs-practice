FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install -g tsc

RUN npm run build && npm install

ENTRYPOINT [ "npm", "run", "dev:node" ]