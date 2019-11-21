const http = require("http");
var fs = require('fs');

http.createServer((req, res) => {

    res.write("<html><h1>hello</h1></html>");
    res.end();

}).listen(81);

http.createServer((req, res) => {
    console.log("INCOMING REQUEST: " + req.method + " " + req.url);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: null }) + "\n");
}).listen(82);

http.createServer((req, res) => {
    //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
    var html = fs.readFileSync('index.html');
   // var html1 = fs.readFileSync('index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html + html);
}).listen(83);


http.createServer((req, res) => {
    if (req.method == 'POST') {
        console.log("POST");
        var body = 'fghf';
        req.on('data', function (data) {
            body += data;
            console.log("Partial body: " + body);
        });
        req.on('end', function () {
            console.log("Body: " + body);
            console.log("before write head called:");
            res.writeHead(200, { 'Content-Type': 'text/text' });
            res.end(body);
            console.log("after end called:");
        });

    }
    else {
        console.log("GET");
        var html = fs.readFileSync('index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html );
    }
}).listen(84);
