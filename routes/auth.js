const express=require('express');
const authController=require('../controller/auth')
const router =express.Router();
router.post('/register',authController.register);
router.post('/index/login',authController.log);

module.exports=router;