const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    role:  {
        type:String,
        default:'user'
    },
    author: String,
    createdAt:   {
        type:String,
        default:Date.now
    },
  });
  module.exports= mongoose.model('User', UserSchema);
