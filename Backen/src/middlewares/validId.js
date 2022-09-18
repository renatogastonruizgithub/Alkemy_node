const User = require('../models/User')

 const validId = async  (req, res, next) => {
try{
   
    const IdUser = await User.findOne({where:{id:req.params.id}})
   if(!IdUser) return res.status(400).send({status:"Usuario no existe"});
    next()
    
} 
catch(error) {
    return res.status(400).send({status:error?.message});
} 
}
module.exports=validId