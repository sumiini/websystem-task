var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/*
* router.get('/result.pug',function(req,res,next){
*  res.render('result', { title: 'Ajou Movie Information' });
*});
*/

module.exports = router;
