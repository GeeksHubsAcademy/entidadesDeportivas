const jwt= require('jsonwebtoken');
const moment = require('moment');
const config =  require('../config/config');

exports.ensureAuthenticated= function(req,res, next){
    console.log(req.headers['x-auth']);
    
    if(!req.headers['x-auth']){
        return res 
                .status(403)
                .send({message:"Tu peticion no tiene cabecera de autorizacion"});
    }
    const token = req.headers['x-auth'];
    const payload = jwt.verify(token, config.TOKEN_SECRET);

    if(payload.exp<=moment().unix()){
        return res
                .status(401)
                .send({message:"el token ha expirado"});
    }

    req.user= payload.sub;
    next();
}