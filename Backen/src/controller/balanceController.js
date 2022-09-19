const servicioBalance =require('../services/balanceService')

const balance= async (req,res)=>{
   try{

    const {id}=req.params
 
    const result= await servicioBalance.balance(id,res)

    return res    
    .status(200).json([{status:"ok",Total_balance:result}])

   }
    catch(e){
        res.status(200).json([{Total_balance:"0"}])
    }
    

} 

 

module.exports={balance}