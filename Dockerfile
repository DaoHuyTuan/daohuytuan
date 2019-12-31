FROM daohuytuan/nodejs10-image:latest
LABEL maintainer="node_daohuytuan"
WORKDIR /
COPY package.json ./
RUN npm install
RUN npm install -g gatsby-cli
COPY . ./
RUN ls
RUN npm run build
