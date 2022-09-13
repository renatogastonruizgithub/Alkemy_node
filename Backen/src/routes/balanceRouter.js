const express = require('express')
const router= express.Router()
const {balance}=require('../controller/balanceController')
const validIdUser=require('../middlewares/validId') 
const authorization=require('../middlewares/validToken')


router.get('/total/:id',authorization,validIdUser,balance)


module.exports=router