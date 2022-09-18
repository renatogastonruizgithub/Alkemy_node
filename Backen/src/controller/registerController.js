const servicioRegister =require('../services/registerService')

const register=async (req,res)=>{    
   
    try{
        const model =  {
            name:req.body.name,
            pass:req.body.pass,
            email:req.body.email
        }   
        const createRegister= await servicioRegister.create(model,res)
        res.status(201).send({status:"ok",data:createRegister})
    }
    catch (e){
        res.status(400).send({error:e?.message,error:"ya existe este usuario"})
    }
}

module.exports={register}