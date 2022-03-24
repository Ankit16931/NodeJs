var http=require('http');
http.createServer(function(req,res)
{
    res.end ("<h1>Welcome to node js</h1>");
}).listen(3000);
console.log("server is started http://127.0.0.1:3000");