const express = require('express')
const router= express.Router()
const {get,crear,delate,update,sumaIngreso}=require('../controller/ingresosController')
const authorization=require('../middlewares/validToken')
  
router.get('/get/:id',authorization,get)
router.get('/total/:id',authorization,sumaIngreso)
router.post('/create/:id',authorization,crear)
router.delete("/delete/:id",authorization,delate)
router.put("/update/:id",authorization,update)


module.exports=router