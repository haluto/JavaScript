var http = require('http');
var url = require('url');
var util = require('util');

//1st demo, view localhost:8081/user?name=terry.yin&url=www.runoob.com  in browser.
/*
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(8081);
*/

//2nd demo, use url.parse to parse the URL
/*
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // parse URL params
    var params = url.parse(req.url, true).query;
    res.write("Name is: " + params.name);
    res.write("\n");
    res.write("Page URL is: " + params.url);
    res.end();
}).listen(8081);
*/


//3rd demo, form submit.
var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(8081);