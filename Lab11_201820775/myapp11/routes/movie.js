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

router.get('/read/:id',function(req,res,next){
    Movie.findById(req.params.id,req.body,(err,movies)=>{
        res.render('editmovie', {mid: req.params.id ,movie:movies});

    });

});



router.post('/update/:id',function(req,res,next){
    Movie.findByIdAndUpdate(req.params.id, req.body, (err, movies)=>{
        res.redirect('http://localhost:3000/admin');
    });
});

router.post('/delete/:id',function(req,res,next){
    console.log(req.params.id);
    Movie.deleteOne({_id : req.params.id}).then((result)=>{
        var response = {
            success : true
        }
        res.status(200).json(response);
    }).catch((err)=>{
        var response = {
            success : false
        }
        res.status(500).json(response);
    });
});

module.exports = router;