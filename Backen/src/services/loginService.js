const User = require('../models/User.js')
const passCrypt= require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config')


const login = async(model,res)=>{    
 
    const ifExistUser =await User.findOne({where:{email:model.email}})
   
    if(ifExistUser){
      const comparePass= await passCrypt.compare(model.pass,ifExistUser.pass)
      if(comparePass){        
        let tokenUser = {
          id: ifExistUser.id,
          nombre:ifExistUser.name,
         }
        const  token = jwt.sign(tokenUser, config.TOKEN_SECRET, {
            expiresIn: config.EXPIRES         
         })    
          return token
      }
      else {
        return  res.status(404) 
      }       
    }    
    else {
      return res.status(404)
    }  
   }

   

module.exports={login}

