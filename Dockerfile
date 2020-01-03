FROM daohuytuan/nodejs10-image:latest
LABEL maintainer="node_daohuytuan"
WORKDIR /daohuytuan
RUN ls
COPY . ./
RUN npm install
RUN npm install -g serve
RUN npm install -g gatsby-cli
RUN npm run clean
RUN npm run build
COPY . ./
RUN ls
EXPOSE 7000
RUN ["serve", "-s", "public", "-l", "7000"]


