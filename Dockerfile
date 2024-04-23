FROM mcr.microsoft.com/devcontainers/typescript-node:18

WORKDIR /app

COPY . .

RUN npm run build

ENTRYPOINT [ "npm", "run", "dev:node" ]