var express = require('express');

const indexRouter = (config) => {
  const router = express.Router();

  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });

  return router;
}

module.exports = indexRouter;
