var express = require('express');
var router = express.Router();
/*
var bodyParser = require('body-parser');
var path = require ('path'); //to work with separtors on any OS including Windows
var querystring = require('querystring'); //for use in GET Query string of form URI/path?name=value
*/
/* GET home page. */
router.post('/readNameAndRespond', function(req, res, next) {
    //expecting data variable called name --retrieve value using body-parser
    var value_name = req.body.name;  //retrieve the data associated with name
    res.send("hello " + value_name);
});

module.exports = router;
