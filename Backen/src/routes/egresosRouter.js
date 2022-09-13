const express = require('express')
const router= express.Router()
const {get,crear,delate,update,sumaEgreso}=require('../controller/egresosController')
const authorization=require('../middlewares/validToken')
const validIdUser=require('../middlewares/validId') 
const validRequest=require('../middlewares/validRquest') 

router.get('/get/:id',authorization,validIdUser,get)
router.get('/total/:id',authorization,validIdUser,sumaEgreso)
router.post('/create/:id',authorization,validRequest,crear)
router.delete('/delete/:id',authorization,validIdUser,delate)
router.put('/update/:id',authorization,validIdUser,validRequest,update)


module.exports=router