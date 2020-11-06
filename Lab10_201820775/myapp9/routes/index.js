const Movie = require('../models/movie');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index.pug' });
});


router.get('/newmovie',function(req,res,next){
  res.render('newmovie');
})

module.exports = router;
