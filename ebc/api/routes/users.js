var express = require('express');
var router = express.Router();
var {GetUsers} = require('../dataservice/dataservice')

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  GetUsers((jsnText) =>{
    res.send(jsnText);
  });
  

});

module.exports = router;
