const User = require('../models/User.js')
const passCrypt= require('bcrypt')


const create = async(model,res)=>{ 
    //encriptar pass
    const passWithHash= await passCrypt.hash(model.pass,10)
   
    // verificar que exista user
    const ifExistUser =await User.findOne({where:{email:model.email}})

    if(!ifExistUser){
        const creado= await User
        .create({
         name:model.name,
         pass:passWithHash,
         email:model.email
        })    
        return res.status(201)
    }
    else{
       return res.status(400)
    }
   
   }

module.exports={create}