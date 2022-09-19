const express = require('express')
const sequelize= require('./dataBase/connection.js')
const rutaIngreso=require('./routes/ingresosRouter')
const rutaBalance=require('./routes/balanceRouter')
const auht= require('./routes/registerRouter')
const auhtLogin= require('./routes/loginRouter')
const logout= require('./routes/logoutRouter')
const User = require('./models/User.js')
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config({path:'./env/env'})
const Operaciones = require('./models/Operaciones.js')
const app= express()
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"],
}));


app.use(express.json())


app.use(cookieParser())
app.use('/api/movimientos',rutaIngreso)
app.use('/api/balance',rutaBalance)
app.use('/api/register',auht)
app.use('/api/login',auhtLogin)
app.use('/api',logout)
app.use(Operaciones)
app.use(User)


app.set('port',process.env.PORT || 3000)
app.listen(app.get('port'),() =>{
console.log('ejecutando',app.get('port'))     
});





