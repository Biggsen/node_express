var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Website' });
});

/* GET article page. */
router.get('/article', (req, res, next) => {
  res.render('article');
});

module.exports = router;
