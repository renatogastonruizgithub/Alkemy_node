const servicioLogin =require('../services/loginService')
const config = require('../config/config')

const login=async (req,res)=>{   
    try{
        const model =  {            
            pass:req.body.pass,
            email:req.body.email
        }   
        const token= await servicioLogin.login(model,res)

        res.cookie('token',token,{
            expires:new Date(Date.now()+config.EXPIRES_COOKIE*24*60*60*1000),
            httpOnly:true,
            sameSite: 'none'
          })
        res.status(201).send({status:"ok",data:token})
       
    }
    catch (e){
        res.status(404).json({error:e?.message,error:"usuario o contraseña invalida"})
    }
}

module.exports={login}