const Movie = require('../models/movie');
var express = require('express');
var router = express.Router();


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

router.get('/routes/movie/read/:id',function(req,res,next){

});

router.get('/routes/movie/update/:id',function(req,res,next){

});

router.get('/routes/movie/delete/:id',function(req,res,next){

});

module.exports = router;