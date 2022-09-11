const express = require('express')
const router= express.Router()
const {logout}=require('../controller/logout')
const authorization=require('../middlewares/validToken')


router.get('/logout',authorization,logout)


module.exports=router