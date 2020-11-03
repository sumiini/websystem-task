var express = require('express');
var router = express.Router();

var path = require('path');
var images_path = path.resolve('./public/images/');


const util = require('util')
const fs = require('fs')


router.post('/',function(req,res,next){


  fs.readFile("../views/index",function(err,tmp1){
    fs.readdir(images_path,function(err,data1){

      data1.forEach(function(element){

        function myPromise(isbool){
          return new Promise((resolve,reject)=>{

            if(isbool===true){
              resolve( res.render('result', { data: req.body}))
            }
            else{
              reject(new Error(`ERROR: ${input_name} doesn't exist`))
            }
          })
        }


          myPromise(req.body.movie_imgurl.replace("/images/","")===element && req.body.movie_title!==""&&req.body.movie_actors!==""&&req.body.movie_genre!=="").then((result)=>{
            res.render('result', { data: req.body})

          })

          myPromise(req.body.movie_imgurl.replace("/images/","")===element&&req.body.movie_title!==""&&req.body.movie_actors!==""&&req.body.movie_genre!=="" ).then((result)=>{

          }).catch((err)=>{
            res.redirect('/')
          })

      });

    });
  });
});





module.exports = router;
