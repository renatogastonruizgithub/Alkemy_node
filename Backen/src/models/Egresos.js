
 const sequelize=require('../dataBase/connection')
 const { DataTypes } = require('sequelize');
 
 
 const Egresos = sequelize.define('Egresos', { 
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
 tableName:"Egresos"
 });
 module.exports=Egresos