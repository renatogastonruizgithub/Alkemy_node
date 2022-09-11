
 const sequelize=require('../dataBase/connection')
const { DataTypes } = require('sequelize');


const Ingresos = sequelize.define('Ingresos', { 
  concepto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  monto: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  fecha:{
    type:DataTypes.DATE,
    allowNull:false
  }
}, {
tableName:"Ingresos"
});


module.exports=Ingresos