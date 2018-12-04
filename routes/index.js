var express = require('express');
var middleware = require('./middleware');
var router = express.Router();

/* GET home page. */
router.get('/', middleware.initLocals, (req, res, next) => {
  res.render('index', { title: 'Home', section: 'home' });
});

/* GET article page. */
router.get('/article', middleware.initLocals, (req, res, next) => {
  res.render('article', { title: 'Article', section: 'article' });
});

module.exports = router;
