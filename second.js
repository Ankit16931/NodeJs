var http=require('http');
var a=10;
var b=20;
var c=a+b;
var msg=`a Value is ${a} <br/> B value is ${b} and </br> sum is ${c}`;
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end (msg);
}).listen(3001);
console.log("server is started http://127.0.0.1:3001");