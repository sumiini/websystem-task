const Movie = require('../models/movie');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Movie.find({}).then((movies)=>{
    res.render('index', { movies: movies });
  }).catch((err)=>{
    console.log(err);
  });
});

router.get('/newmovie',function(req,res,next){
  res.render('newmovie');

});

router.get('/admin',function(req,res,next){
  Movie.find({}).then((movies)=>{
    res.render('admin', { movies: movies });
  }).catch((err)=>{
    console.log(err);
  });
});





module.exports = router;
