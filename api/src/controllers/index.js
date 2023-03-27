var express = require('express');
var router = express.Router();

//Giao dien chinh
router.get('/', function (req, res) {
    res.send({ some: 'json' });
  });
//Router change for page home
router.use('/user', require(__dirname + '/user'));


module.exports = router;