const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    role:  {
        type:String,
        default:'user'
    },
    name: {
        type:String,
        required:true
    },
    phone: String,
    email: String,
    password: String,
    createdAt:   {
        type:String,
        default:Date.now
    },
  });
  module.exports= mongoose.model('User', UserSchema);
