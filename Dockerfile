FROM daohuytuan/nodejs10-image:latest
LABEL maintainer="node_daohuytuan"
WORKDIR /daohuytuan
RUN ls
COPY . ./
RUN npm install
RUN npm install -g gatsby-cli
RUN npm run clean
RUN npm run build
COPY . ./
RUN ls
RUN cp ./public ./static-server/
RUN cd static-server
RUN npm run serve public
RUN cd ..
EXPOSE 7000

