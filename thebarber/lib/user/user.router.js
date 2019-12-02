const express = require('express');
const router = express.Router();
const controller=require('./user.controller');
router.use((req,res,next)=>{
    console.log("I am middelware");
    next();
})
router.get('/user',controller.main)
module.exports=router;