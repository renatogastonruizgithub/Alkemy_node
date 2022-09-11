const express = require('express')
const app= express()
const sequelize= require('./dataBase/connection.js')
const Ingresos =require('./models/Ingresos.js')
const Egresos =require('./models/Egresos.js')
const rutaIngreso=require('./routes/ingresosRouter')
const rutaEgresos=require('./routes/egresosRouter')
const rutaBalance=require('./routes/balanceRouter')
const auht= require('./routes/registerRouter')
const auhtLogin= require('./routes/loginRouter')
const logout= require('./routes/logoutRouter')
const User = require('./models/User.js')
const cookieParser = require('cookie-parser');
require('dotenv').config({path:'./env/env'})
app.use(express.json())

app.use(cookieParser())
app.use('/api/ingresos',rutaIngreso)
app.use('/api/egresos',rutaEgresos)
app.use('/api/balance',rutaBalance)
app.use('/api/register',auht)
app.use('/api/login',auhtLogin)
app.use('/api',logout)
app.use(Ingresos)
app.use(Egresos)
app.use(User)


app.set('port',process.env.PORT || 3000)
app.listen(app.get('port'),() =>{
console.log('ejecutando',app.get('port'))

     
});





