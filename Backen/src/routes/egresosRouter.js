const express = require('express')
const router= express.Router()
const {get,crear,delate,update,sumaEgreso}=require('../controller/egresosController')
const authorization=require('../middlewares/validToken')
  
router.get('/get/:id',authorization,get)
router.get('/total/:id',authorization,sumaEgreso)
router.post('/create/:id',authorization,crear)
router.delete('/delete/:id',authorization,delate)
router.put('/update/:id',authorization,update)


module.exports=router