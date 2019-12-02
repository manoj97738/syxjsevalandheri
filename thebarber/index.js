const express = require('express');
const app = express();
let config = require('./config/app.config');
config = new config(app);
app.use('/v1',require('./lib/user'))
app.get('/', (req, res) => {
    res.end('Hello world')
})
app.listen(config.port, (err) => {
    console.log(`We are up and running on port ${config.port}`)
});
