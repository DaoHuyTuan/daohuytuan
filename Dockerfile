FROM daohuytuan/daohuytuan:latest
EXPOSE 7000
WORKDIR /daohuytuan
COPY package.json gatsby-node.js gatsby-config.js gatsby-browser.js ./
RUN npm install
RUN npm install -g gatsby-cli
COPY . ./
RUN npm run build
CMD ["gatsby","serve","-p", "7000", "-H", "0.0.0.0"]