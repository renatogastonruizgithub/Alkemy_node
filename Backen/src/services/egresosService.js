const Egresos = require('../models/Egresos.js')
const User = require('../models/User.js')
const sequelize = require('../dataBase/connection')




//sumatoria parcial de todos los egresos del usuario
const sumaEgreso = async(id)=>{    
  const IdUser = await Egresos.findOne({where:{UserId: id}})
  
  if(!IdUser)return res.status(404).json({error:"este usuarion no tiene engresos"})
  else{   
      const suma= await Egresos.findAll({where: { UserId: id },
        include: [{
          model: User,
          attributes:['name','id']
        }],  
        attributes: [      
          [sequelize.fn('sum', sequelize.col('monto')), 'total_egresos'],
        ],
        raw: true
      })
      .catch(function (err) {
         return err
      });     
      return suma
}
}

//devuelve los egresos paginados de un user
const get = async(options,id)=>{ 
  const IdUser = await Egresos.findOne({where:{UserId: id}})
  
  if(!IdUser)return "no existe usuario"
  else{  
  const { count, rows } = await Egresos.findAndCountAll({offset:options.offset,
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
 const creado= await Egresos
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
const borrado= await Egresos
              .destroy({
                where: {id}
              })                  
return borrado
}

const update =async(id,ingresoDto)=>{
    const act= await Egresos
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


    
module.exports={get,create,delate,update,sumaEgreso}