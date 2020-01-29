const express = require("express");
const cacheableResponse = require("cacheable-response");
const compression = require("compression");
const helmet = require("helmet");
const next = require("next");

const router = require("./routers");
const formData = require("express-form-data");
var cookieParser = require("cookie-parser");
const dev = process.env.NODE_ENV !== "production";
async function bootstrap() {
  const app = next({
    dev
  });
  const handle = app.getRequestHandler();
  const ssrCache = cacheableResponse({
    ttl: 1000 * 60 * 60, // 1hour
    get: async ({ req, res, pagePath, queryParams }) => ({
      data: await app.renderToHTML(req, res, pagePath, queryParams)
    }),
    send: ({ data, res }) => res.send(data)
  });
  app.prepare().then(() => {
    const server = express();
    server.use(cookieParser());

    server.use(
      compression({
        threshold: 0
      })
    );

    server.use(helmet());
    server.use(formData.parse());
    server.get("/", (req, res) => ssrCache({ req, res, pagePath: "/" }));

    server.get("/about", (req, res) => {
      const queryParams = { id: req.params.id };
      const pagePath = "/about";
      return ssrCache({ req, res, pagePath, queryParams });
    });
    server.get("/uses", (req, res) => {
      const queryParams = { id: req.params.id };
      const pagePath = "/uses";
      return ssrCache({ req, res, pagePath, queryParams });
    });
    server.get("*", (req, res) => handle(req, res));

    if (dev) {
      server.listen(3002, err => {
        if (err) throw err;
        console.log("> Ready on http://localhost:3002");
      });
    } else {
      server.listen(7000, err => {
        if (err) throw err;
        console.log("> Ready on http://localhost:7000");
      });
    }
  });

  // server.use(
  //   "/",
  //   (req, res, next) => {
  //     req.data = {
  //       lang: "vi"
  //     };
  //     req.app = app;
  //     next();
  //   },
  //   router
  // );

  // server.use("/:lang", router);

  // server.get("*", (req, res) => {
  //   return handle(req, res);
  // });
}

bootstrap().catch(ex => {
  console.error(ex.stack);
  process.exit(1);
});
