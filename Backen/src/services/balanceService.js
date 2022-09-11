const serviceI = require('../services/ingresosService')
const serviceE = require('../services/egresosService')

const balance = async(id)=>{  
   //llamo al service y le paso el id del user a los metodos de la sumatoria parciales 

const ingresos= await serviceI.sumaIngreso(id)   
const egresos= await serviceE.sumaEgreso(id) 

 //recorro el json de la bd
ingresos.forEach((key)=>{  
   totalIngresos=key.total_ingresos
})

egresos.forEach((key)=>{  
   totalEgresos=key.total_egresos
})

   const balanceGeneral =(totalIngresos-totalEgresos)
   console.log(balance+"total para el usuario"+id)

   return balanceGeneral
  }

  module.exports={balance}




  