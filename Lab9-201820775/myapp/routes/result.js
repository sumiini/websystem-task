var express = require('express');
var router = express.Router();

const fs = require('fs')

/*
* fs.stat("./something",(err,stat)=>{
*   if(err) console.error(err)
*   else{
*     console.log(stat.isDirectory())
*     console.log(Stat.isFile())
*   }
* })
* */

router.post('/',function(req,res,next){

  res.render('result', { data: req.body});
});

module.exports = router;
