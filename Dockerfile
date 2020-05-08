FROM node:12
FROM mysql
WORKDIR /app
COPY package*.json ./
COPY . .
