var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//页面定义
var routes = require('./routes/index');
var mac = require('./routes/mac');

var ejs = require("ejs");
var app = express();
//为实现ejs下模板集成，安装express-partials模块
//参考笔记http://www.cnblogs.com/greenteaone/p/3685733.html
var partials = require("express-partials");


// view engine setup
//app.engine('.html', ejs.__express);
app.set('views', path.join(__dirname, 'views')); //设置视图根目录
app.set('view engine', 'ejs'); //设置视图模块引擎

app.use(partials());

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico')); //设置图标路径

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//设置访问页面路由
app.use('/', routes);
app.use('/mac', mac);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
