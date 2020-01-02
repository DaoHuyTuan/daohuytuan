FROM daohuytuan/nodejs10-image:latest
LABEL maintainer="node_daohuytuan"
WORKDIR /daohuytuan
RUN ls
COPY . ./
RUN npm install -g gatsby-cli
RUN npm run clean
RUN npm install
RUN npm run build
COPY . ./
EXPOSE 7000
