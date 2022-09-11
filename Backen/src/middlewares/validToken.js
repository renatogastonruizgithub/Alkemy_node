const cookieParser = require('cookie-parser');
const config = require('../config/config')
const jwt = require('jsonwebtoken')


const authorization = (req, res, next) => {
     const token = req.cookies.token;
  try {
   
    if (token){   

      const data = jwt.verify(token, config.TOKEN_SECRET);
          req.id = data
          req.name=data      
      next();
    }
    else{
      return res.status(403).send({status:"Access denied"});
    }
  

} catch (error) {
    res.status(400).send({status:"Invalid token"});
} 
  
  }


  module.exports=authorization

 