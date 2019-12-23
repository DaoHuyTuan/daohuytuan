FROM daohuytuan/nodejs10-image:latest
LABEL maintainer="node_daohuytuan"
WORKDIR /daohuytuan
COPY package.json ./
RUN rm -rf ~/.node-gyp
RUN rm -rf package-lock.json
RUN rm -rf node_modules
RUN npm install -g npm
RUN npm install -g node-gyp
RUN npm install
RUN npm install gatsby-cli
COPY . ./
RUN ls
RUN npm run build
