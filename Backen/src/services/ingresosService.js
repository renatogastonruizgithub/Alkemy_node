const sequelize = require('../dataBase/connection')
const Ingresos = require('../models/Ingresos.js')
const User = require('../models/User.js')

//devuelve sumatoria parcial de todos los ingresos del usuario
const sumaIngreso = async(id)=>{   
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
    console.log(suma + " suma de bd")
 return suma 
}

//devuelve los ingresos paginados de un user
const get = async(options,id)=>{
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


const create = async(ingresoDto,id)=>{ 
 const creado= await Ingresos
    .create({
        concepto:ingresoDto.concepto,
        monto:ingresoDto.monto,
        fecha:ingresoDto.fecha,
        UserId:id
       
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
    const act= await Ingresos
                  .update({
                    concepto:ingresoDto.concepto,
                    monto:ingresoDto.monto,
                    fecha:ingresoDto.fecha
                  },{
                    where: {id}
                  })                  
    return act
    }


    
module.exports={get,create,delate,update,sumaIngreso}