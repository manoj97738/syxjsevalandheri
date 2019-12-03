const mongoose=require('mongoose');
class AppConfig {
    constructor(app) {
        this.app = app;
        this.connectDb();
        this.connection = mongoose.connection;
        this.connection.on('error', 
        console.error.bind(console, 
        'connection error:'));

        this.connection.once('open', function callback () {
          console.log("We are connected!");
        });
    }
    get port() {
        if (!process.env.port) {
            return 3000;
        }
        return process.env.port;
    }
    get mongoUri() {
        if (!process.env.mongoUri) {
            return 'mongodb://localhost:27017/thebarber';
        }
        return process.env.mongoUri;
    }
    connectDb(){
       return  mongoose.connect(this.mongoUri, {
                            useNewUrlParser: true
                            });
    }
}
module.exports = AppConfig;