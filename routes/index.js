var express = require('express');
var router = express.Router();
/* To home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
  res.render('index1', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Express' });
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Express' });
});
router.get('/testmonials', function(req, res, next) {
  res.render('testmonials', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/maverix', function(req, res, next) {
  res.render('maverix-master/maverix-theme/index', { title: 'Express' });
});

module.exports = router;
