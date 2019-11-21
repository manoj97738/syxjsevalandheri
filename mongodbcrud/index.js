const express = require('express');
const dbwrapper = require('./db.wrapper');
const client = require('./db.connect').client;

const app = express();

client.connect(function (err) {
    console.log(err);
    console.log("Connected successfully to server");
    var myobj = { name: "syxservices Inc", address: "Highway 37", age: 10 };

    const db = client.db('olx');
    db.collection("decembersalaryincrement").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        dbwrapper.findDocuments(db)
            .then(function (docs) {
                return dbwrapper.findDocuments(db)
            }).then(function (docs) {
                return dbwrapper.updateDocument(db)
            }).then(function (docs) {
                return dbwrapper.findDocuments(db)
            }).then(function (docs) {
                client.close();
            }).catch((err) => {
                console.log("1 document inserted");
                console.log("Fatt gaua");
            });
    });

});
app.get('/', (req, res) => {
    res.send('Hello world')
});

app.listen(800);


