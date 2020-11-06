const Movie = require('../models/movie');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    Movie.find({}).then((movies)=>{
      res.render('index',{movies:movies});

    }).catch((err)=>{
      console.log(err);
    });

});


router.get('/newmovie',function(req,res,next){
  res.render('newmovie');
});

router.post('/create',function(req,res,next){
  const moviedb=new Movie({
    title : req.body.title,
    year : req.body.year,
    url : req.body.url
  });


  moviedb.save((err)=>{
    res.redirect('http://localhost:3000/');
  });
});


module.exports = router;
