FROM daohuytuan/nodejs10-image:latest
LABEL maintainer="node_daohuytuan"
WORKDIR /daohuytuan
COPY . ./
RUN rm -rf node_modules
RUN npm install
RUN npm run clean
RUN npm run build
COPY . ./
EXPOSE 7000
CMD ["npm", "run", "serve"]