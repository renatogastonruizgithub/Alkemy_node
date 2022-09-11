const logout=async (req,res)=>{    
   //borros la cookie
    try{
        return res
        .clearCookie('token')
        .status(200).send({status:"desconectado"})
    }
    catch (e){
        res.status(500).send({error:e})
    }
}

module.exports={logout}