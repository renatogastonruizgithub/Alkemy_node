const express = require('express')
const router= express.Router()
const {register}=require('../controller/registerController')



router.post('/user',register)


module.exports=router