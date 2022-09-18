const { json } = require('express')
const sequelize = require('../dataBase/connection')
const Ingresos = require('../models/Ingresos.js')
const User = require('../models/User.js')

//devuelve sumatoria parcial de todos los ingresos del usuario
const sumaIngreso = async(id,res)=>{   
  const IdUser1 = await Ingresos.findOne({where:{UserId: id}})
  
  if(!IdUser1)return res.status(404).json({error:"este usuarion no tiene ingresos"})
  else{
 
  const suma= await Ingresos.findAll({where: { UserId: id },     
    include: [{
      model: User,
      attributes:['name','id']
    }],  
    attributes: [      
      [sequelize.fn('sum', sequelize.col('monto')), 'total_ingresos'],
    ],
    raw: true
  })
  return suma
}
   
}

//devuelve los ingresos paginados de un user
const get = async(options,id)=>{
  const IdUser = await Ingresos.findOne({where:{UserId: id}})
  
  if(!IdUser)return "no existe usuario"
  else{
    const { count, rows } = await Ingresos.findAndCountAll({offset:options.offset,
      limit:options.limit,      
      where: { UserId: id },
      order: [
        ['createdAt', 'DESC'],       
      ],
      include: [{
        model: User,
        required: true,
        attributes:['name','id']
      }],    
      attributes:{
        exclude:['createdAt','updatedAt']
      }
    })     
   return count, rows
  }
}


const create = async(ingresoDto,id)=>{ 
 const creado= await Ingresos
    .create({
        concepto:ingresoDto.concepto,
        monto:ingresoDto.monto,
        fecha:ingresoDto.fecha,
        UserId:id,
        categoria:ingresoDto.categoria
       
    })    
    return  creado
}

const delate =async(id)=>{
const borrado= await Ingresos
              .destroy({
                where: {id}
              })                  
return borrado
}

const update =async(id,ingresoDto)=>{
  const IfOperacion = await Ingresos.findOne({where:{id: id}})
  if(!IfOperacion)return "no existe esta operacion"
  else{
    const act= await Ingresos
    .update({
      concepto:ingresoDto.concepto,
      monto:ingresoDto.monto,
      fecha:ingresoDto.fecha,
      categoria:ingresoDto.categoria
    },{
      where: {id}
    })                  
return "Actualizado"
}

  }
   

    
module.exports={get,create,delate,update,sumaIngreso}