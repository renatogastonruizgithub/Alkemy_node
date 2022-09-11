const express = require('express')
const router= express.Router()
const {balance}=require('../controller/balanceController')

  
router.get('/total/:id',balance)


module.exports=router