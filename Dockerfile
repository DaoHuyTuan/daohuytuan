FROM daohuytuan/nodejs10-image:latest
LABEL maintainer="node_daohuytuan"
WORKDIR /daohuytuan
RUN ls
COPY package.json ./
COPY . ./
RUN npm install
RUN npm install -g gatsby-cli

RUN npm run build
COPY public
RUN ls
