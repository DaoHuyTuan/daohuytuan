FROM node:10-alpine
LABEL maintainer="node_daohuytuan"
WORKDIR /daohuytuan
COPY . ./
RUN npm install
RUN npm install -g serve
RUN npm install -g gatsby-cli
RUN npm run clean
RUN npm run build
COPY . ./
EXPOSE 7000
CMD ["serve", "-s", "public", "-l", "7000"]


