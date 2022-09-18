const serviceI = require("../services/ingresosService");
const serviceE = require("../services/egresosService");
const Egresos = require("../models/Egresos");
const Ingresos = require("../models/Ingresos");

const balance = async (id) => {
  
  const ingresos = await serviceI.sumaIngreso(id);
  const egresos = await serviceE.sumaEgreso(id);      
  console.log(ingresos)
  //recorro el json de la bd
  ingresos.forEach((keyI) => {
   totalIngresos = keyI.total_ingresos;          
  });     
  egresos.forEach((keyE) => {
 totalEgresos = keyE.total_egresos;
  }); 
  
  const balanceGeneral = totalIngresos - totalEgresos;
       
  return balanceGeneral;
    
};

module.exports = { balance };
