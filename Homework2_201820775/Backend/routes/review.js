var express = require('express');
//const { default: Reviews } = require('../../frontend/src/pages/Reviews');
var router = express.Router();
const Review = require('../models/review');
const cors = require('cors');
router.use(cors());


router.get('/',function(req,res,next){
     
     Review.find({},function(err,rev){
        console.log(rev);
         res.status(200).json({
             
             alldata:rev
         });
         
     })
     
     
    console.log("hhi back-----get");
});

router.post('/',function(req,res,next){
    console.log(req.body.movie_name)
     //const [{movie_name,review_content,rate}]=req.params;
     const reviewdb= new Review({
         movie_name:req.body.movie_name,
         review_content:req.body.review_content,
         rate:req.body.rate,

     });
    
     reviewdb.save((err)=>{
        res.status(200).json({
            'movie_name' : req.body.movie_name,
            'review_content' : req.body.review_content,
            'rate':req.body.rate
        });
         //res.redirect('http://localhost:3000/');
     })
    console.log("db 저장하는 back입니다");


});

router.post('/:id',function(req,res,next){
    console.log(req);
    //Review.deleteOne({_id:})

});

module.exports=router;