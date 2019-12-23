FROM node:10-alpine
LABEL maintainer="node_daohuytuan"
WORKDIR /daohuytuan
COPY package.json ./
RUN npm install -g gatsby-cli
RUN npm install
COPY . ./
RUN ls
RUN npm run build
