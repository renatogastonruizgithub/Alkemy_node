const service = require("../services/ingresosService");

const balance = async (id) => {  
   const ingresos = await service.sumaIngreso(id);
  const egresos = await service.sumaEgreso(id);      
 
  //recorro el json de la bd
  ingresos.forEach((keyI) => {
   totalIngresos = keyI.total_ingresos;          
  });     
  egresos.forEach((keyE) => {
 totalEgresos = keyE.total_egresos;
  }); 
 

  const balanceGeneral = totalIngresos - totalEgresos;

  return balanceGeneral.toString(); 
    
};


module.exports={balance}