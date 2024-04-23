FROM mcr.microsoft.com/devcontainers/typescript-node:18

WORKDIR /app

COPY . .

RUN npm install && npm run build

ENTRYPOINT [ "npm", "run", "dev:node" ]