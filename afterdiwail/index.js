const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
//**Middleware */
app.use((req, res, next) => {
    console.log("Mai bhi ");
    console.log(1)
    next();
    console.log(2)
    res.send('hsssi')
    console.log(3)
});
app.get('', (req, res) => {
    console.log(4)
    res.send('hello world').end();
    process.exit(200);
});
app.get('/index', (req, res) => {
    res.sendFile(path.normalize(__dirname + '/index.html'));
});
app.get('/img1', (req, res) => {
    res.sendFile(path.normalize(__dirname + '/img1.jpg'));
});
app.use((req, res, next) => {
    console.log("Mai bhi 2");
    next();
});
app.get('/pdf', (req, res) => {
    // res.writeHead(200,{'content-type': 'application/plain'})
    res.sendFile(path.normalize(__dirname + '/javascript-cheat-sheet-v1.pdf'));
});
app.get('/pdf2', (req, res) => {
    res.writeHead(200, { 'content-type': 'application/pdf' })
    fs.createReadStream(path.normalize(__dirname + '/javascript-cheat-sheet-v1.pdf')).pipe(res)
});

app.all('*', (req, res) => {
    res.send('No such Money Dude')
});
app.listen(3000, () => {

});