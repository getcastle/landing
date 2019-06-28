var express = require('express');

const indexRouter = (config) => {
  const router = express.Router();

  /* GET home page. */
  router.get('/', function (req, res, next) {
    const templateVariables = config.index || {};
    res.render('index', templateVariables);
  });

  return router;
}

module.exports = indexRouter;
