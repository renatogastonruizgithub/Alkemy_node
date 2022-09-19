
 const sequelize=require('../dataBase/connection')
 const { DataTypes } = require('sequelize');
const Operaciones = require('./Operaciones');
 
 
 const User = sequelize.define('User', { 
   name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   pass: {
    type: DataTypes.STRING,
    allowNull: false
  },
   email: {
     type: DataTypes.STRING,
     allowNull: false
   },
  
 }, {
 tableName:"User"
 });

 User.hasMany(Operaciones,{foreignKey:"UserId"} )
 Operaciones.belongsTo(User ,{foreignKey:"UserId"})

 module.exports=User