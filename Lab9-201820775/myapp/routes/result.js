var express = require('express');
var router = express.Router();


router.post('/',function(req,res,next){

  res.render('result', { data: req.body});
});

module.exports = router;
