var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mac',  //存放对应view的名字
        { title: '存放mac电脑简介页面' }
  );
});

module.exports = router;
