const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://syxsevice:syxsevice123@ds139430.mlab.com:39430/olx';
module.exports.client = new MongoClient(url);