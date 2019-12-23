FROM node:10-alpine
LABEL maintainer="node_daohuytuan"
WORKDIR /daohuytuan
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build
