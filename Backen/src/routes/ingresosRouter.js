const express = require('express')
const router= express.Router()
const {getEgresos,getIngresos,crear,delate,update}=require('../controller/ingresosController')
const authorization=require('../middlewares/validToken')
const validIdUser=require('../middlewares/validId') 
const validRequest=require('../middlewares/validRquest') 

router.get('/getIngresos/:id',authorization,validIdUser,getIngresos)
router.get('/getEgresos/:id',authorization,validIdUser,getEgresos)
router.post('/create/:id',authorization,validRequest,crear)
router.delete("/delete/:id",authorization,delate)
router.put("/update/:id",authorization,validRequest,update)


module.exports=router