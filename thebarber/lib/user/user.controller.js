const User=require('./user.model');
const DBWrapper=require('../../wrappers/db.wrapper')

class UserController {
    main(req,res,next){
        DBWrapper.find(User,{})
            .then((data)=>{
                res.json(data);
            }).catch((err)=>{
               res.json(err);
            })
    }
    create(req,res,next){
        const body={email:'abc@abc.com'} //req.body
        DBWrapper.create(User,body)
            .then((data)=>{
                return  DBWrapper.find(User,{});
            }).then((data)=>{
                res.send(data);
            }).catch((err)=>{
               res.json(err);
            })
    }
}
module.exports = new UserController();