const sequelize = require('../dataBase/connection')
const Operaciones = require('../models/Operaciones')
const User = require('../models/User.js')

//devuelve sumatoria parcial de todos los ingresos del usuario
const sumaIngreso = async(id,res)=>{   
  const IdUser1 = await Operaciones.findOne({where:{UserId: id}})  
  if(!IdUser1)return res.status(404).json({error:"este usuarion no tiene ingresos"})
  else{
      const suma= await Operaciones.findAll({where: { UserId: id, tipo:'ingreso' },     
      include: [{
        model: User,
        attributes:['name','id']
      }],  
      attributes: [      
        [sequelize.fn('sum', sequelize.col('monto')), 'total_ingresos'],
      ],
      raw: true
    })    
    console.log(suma)
    return suma  
}   
}

const sumaEgreso = async(id,res)=>{   
  const IdUser1 = await Operaciones.findOne({where:{UserId: id}})
  
  if(!IdUser1)return res.status(404).json({error:"este usuarion no tiene egresos"})
  else{
      const suma= await Operaciones.findAll({where: { UserId: id, tipo:'egreso' },     
      include: [{
        model: User,
        attributes:['name','id']
      }],  
      attributes: [      
        [sequelize.fn('sum', sequelize.col('monto')), 'total_egresos'],
      ],
      raw: true
    })    
    console.log(suma)
    return suma  
}   
}

//devuelve los ingresos paginados de un user
const getIngresos = async(options,id)=>{
  const IdUser = await Operaciones.findOne({where:{UserId: id}})
  
  if(!IdUser)return "no existe usuario"
  else{
    const { count, rows } = await Operaciones.findAndCountAll({offset:options.offset,
      limit:options.limit,      
      where: { UserId: id , tipo:'ingreso'},  
      order: [
        ['createdAt', 'DESC'],       
      ],    
      attributes:{
        exclude:['createdAt','updatedAt']
      }
    })     
   return count, rows
  }
}

const getEgresos = async(options,id)=>{
  const IdUser = await Operaciones.findOne({where:{UserId: id}})
  
  if(!IdUser)return "no existe usuario"
  else{
    const { count, rows } = await Operaciones.findAndCountAll({offset:options.offset,
      limit:options.limit,      
      where: { UserId: id , tipo:'egreso'},  
      order: [
        ['createdAt', 'DESC'],       
      ],    
      attributes:{
        exclude:['createdAt','updatedAt']
      }
    })     
   return count, rows
  }
}

const create = async(ingresoDto,id)=>{ 
 const creado= await Operaciones
    .create({
        concepto:ingresoDto.concepto,
        monto:ingresoDto.monto,
        fecha:ingresoDto.fecha,
        UserId:id,
        categoria:ingresoDto.categoria,
        tipo:ingresoDto.tipo
    })    
    return  creado
}

const delate =async(id)=>{
const borrado= await Operaciones
              .destroy({
                where: {id}
              })                  
return borrado
}

const update =async(id,ingresoDto)=>{
  const IfOperacion = await Operaciones.findOne({where:{id: id}})
  if(!IfOperacion)return "no existe esta operacion"
  else{
    const act= await Operaciones
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
   

    
module.exports={getIngresos,getEgresos,create,delate,update,sumaIngreso,sumaEgreso}