var express = require('express');
var router = express.Router();
var {CheckPassword} = require('../dataservice/dataservice')

router.post('/', (req, res) => {
    // handle the request
    userNamePw =  req.body;
    console.log("post hello " + JSON.stringify(userNamePw));
    //res.json({ id: 1, name: "Catcher in the Rye" });
    CheckPassword( (jsnText) =>{
        res.json(jsnText);
      }, 
      userNamePw.name, userNamePw.password);
    //res.json( JSON.stringify({ id: 1, name: "Catcher in the Rye" }));
 })

  

  router.get('/', (req, res) => {
    // handle the request
    userNamePw =  req.body;
    console.log("get hello" + userNamePw);
    res.json( JSON.stringify({ id: 1, name: "Catcher in the Rye" }));
  })


  module.exports = router;