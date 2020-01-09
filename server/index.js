const express = require("express");
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
  await app.prepare();
  const server = express();
  server.use(cookieParser());

  server.use(
    compression({
      threshold: 0
    })
  );

  server.use(helmet());
  server.use(formData.parse());

  server.use(
    "/",
    (req, res, next) => {
      req.data = {
        lang: "vi"
      };
      req.app = app;
      next();
    },
    router
  );

  // server.use("/:lang", router);

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  if (dev) {
    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  } else {
    server.listen(7000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:7000");
    });
  }
}

bootstrap().catch(ex => {
  console.error(ex.stack);
  process.exit(1);
});
