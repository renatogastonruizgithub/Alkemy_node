const servicioBalance =require('../services/balanceService')

const balance= async(req,res)=>{
    const {id}=req.params

    const result= await servicioBalance.balance(id)
    return res.status(200).send({status:"ok",Total_balance:result})
}



module.exports={balance}