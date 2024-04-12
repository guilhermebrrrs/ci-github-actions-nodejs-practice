FROM node:alpine

WORKDIR /app

COPY . .

RUN npm run build && npm install

ENTRYPOINT [ "npm", "run", "dev:node" ]