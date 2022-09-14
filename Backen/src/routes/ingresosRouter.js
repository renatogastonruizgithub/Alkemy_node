const express = require('express')
const router= express.Router()
const {get,crear,delate,update,sumaIngreso}=require('../controller/ingresosController')
const authorization=require('../middlewares/validToken')
const validIdUser=require('../middlewares/validId') 
const validRequest=require('../middlewares/validRquest') 

router.get('/getUser/:id',authorization,validIdUser,get)
router.get('/totalUser/:id',authorization,validIdUser,sumaIngreso)
router.post('/create/:id',authorization,validRequest,crear)
router.delete("/delete/:id",authorization,delate)
router.put("/update/:id",authorization,validRequest,update)


module.exports=router