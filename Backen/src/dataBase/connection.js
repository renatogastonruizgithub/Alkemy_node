const { Sequelize } = require('sequelize');
const dbConfig = require("../config/config");


const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
  dialect: 'mysql',
  host: dbConfig.HOST, 
}); 

sequelize
.sync({ force: false })
.then(() => {
  console.log("Connection has been established successfully.");
})
.catch((error) => {
  console.error("Unable to connect to the database:", error);
}); 

module.exports=sequelize 

