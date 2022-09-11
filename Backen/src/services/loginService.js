const User = require('../models/User.js')
const passCrypt= require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config')


const login = async(model)=>{    
 
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
        return "contraseña incorrecta" 
      }       
    }    
    else {
      return "usuario no existe"
    }  
   }

   

module.exports={login}

