const express = require("express");
const router = express.Router({
  mergeParams: true
});

// const PersonalCorporate = require("./personal-corporate");

function getParam(req) {
  return {
    ...req.params,
    ...req.data,
    ...req.query
    // lang: req.params.lang || req.data.lang
  };
}

router.get("/", (req, res) => {
  const queryParams = getParam(req);
  req.app.render(req, res, "/", queryParams);
});
router.get("/about", (req, res) => {
  const queryParams = getParam(req);
  req.app.render(req, res, "/about", queryParams);
});
module.exports = router;
