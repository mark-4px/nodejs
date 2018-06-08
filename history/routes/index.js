var express = require('express');
var router = express.Router();

var data = require('./data.js');

var _styles = [
  'http://cdn.mark.ah.cn/bootstrap/3.0.3/css/bootstrap.min.css',
  'http://cdn.mark.ah.cn/iconfont/iconfont.css',
  'http://cdn.mark.ah.cn/animate/3.5.1/animate.min.css',
  '/css/hover_pack.css',
  '/css/main.css',
  '/css/colors/color-74c9be.css',
  '/css/font-awesome.min.css',
  '/css/colors/color-74c9be.css'
];

var _scripts = [
  'http://cdn.mark.ah.cn/jquery/2.1.4/jquery-2.1.4.min.js',
  'http://cdn.mark.ah.cn/bootstrap/3.0.3/js/bootstrap.min.js',
  '/js/hover_pack.js',
  'http://cdn.mark.ah.cn/wow/wow.min.js'
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout',{
    version: '0.0.1',
    styles: _styles,
    scripts: _scripts,
    sections: data.sections
  });
});


module.exports = router;
