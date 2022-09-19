
 const sequelize=require('../dataBase/connection')
const { DataTypes } = require('sequelize');


const Operaciones = sequelize.define('Operaciones', { 
  concepto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  monto: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    get: function() { // devuelvo string
      return this.getDataValue('monto').toString();
    }
  },
  fecha:{
    type:DataTypes.DATE,
    allowNull:false,
    get: function() { //devuelvo string formateado
      return this.getDataValue('fecha')
        .toLocaleString('es-AR', { dateStyle	: 'medium' });
    }
  }
}, {
tableName:"Operaciones"
});


module.exports=Operaciones