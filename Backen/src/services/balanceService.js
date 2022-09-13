const serviceI = require("../services/ingresosService");
const serviceE = require("../services/egresosService");

const balance = async (id) => {
  //llamo al service y le paso el id del user a los metodos de la sumatoria parciales
   
      const ingresos = await serviceI.sumaIngreso(id);
      const egresos = await serviceE.sumaEgreso(id);      
      
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
