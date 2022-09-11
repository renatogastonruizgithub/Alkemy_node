const express = require('express')
const router= express.Router()
const {login}=require('../controller/loginController')



router.post('/session',login)


module.exports=router