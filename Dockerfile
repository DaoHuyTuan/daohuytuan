FROM daohuytuan/nodejs10-image:latest
LABEL maintainer="node_daohuytuan"
WORKDIR /daohuytuan
RUN ls
COPY . ./
RUN npm install
RUN rm -rf public
RUN npm install -g gatsby-cli
RUN npm run build
COPY . ./
RUN ls
