
 const sequelize=require('../dataBase/connection')
 const Egresos =require('./Egresos')
const Ingresos=require('./Ingresos')

 const { DataTypes } = require('sequelize');
 
 
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
 User.hasMany(Egresos ,{foreignKey:"UserId"})
 Egresos.belongsTo(User,{foreignKey:"UserId"} )
 
 User.hasMany(Ingresos,{foreignKey:"UserId"} )
 Ingresos.belongsTo(User ,{foreignKey:"UserId"})

 module.exports=User