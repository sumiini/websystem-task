const Movie = require('../models/movie');
var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    Movie.find({}).then((movies)=>{
        res.render('index',{movies:movies});

    }).catch((err)=>{
        console.log(err);
    });

});



module.exports = router;