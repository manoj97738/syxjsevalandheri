const User=require('./user.model');
const DBWrapper=require('../../wrappers/db.wrapper')

class UserController {
    main(req,res,next){
        DBWrapper.find(User,{})
            .then((data)=>{
                console.log(data);
                res.send('User controller');
            }).catch((err)=>{
                console.log(err)
            })
    }
}
module.exports = new UserController();