FROM node:10-alpine
LABEL maintainer="node_daohuytuan"
WORKDIR /daohuytuan
COPY package.json ./
RUN npm install sharp
RUN npm install
RUN npm install gatsby-cli
COPY . ./
RUN ls
RUN npm run build
