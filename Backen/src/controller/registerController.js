const servicioRegister =require('../services/registerService')

const register=async (req,res)=>{    
   
    try{
        const model =  {
            name:req.body.name,
            pass:req.body.pass,
            email:req.body.email
        }   
        const createRegister= await servicioRegister.create(model)
        res.status(201).send({status:"ok",data:createRegister})
    }
    catch (e){
        res.status(500).send({error:e})
    }
}

module.exports={register}