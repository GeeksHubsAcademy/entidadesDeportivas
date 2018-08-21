const express = require('express');
const router = express.Router();
const moment = require('moment');

const jwtUtils = require('../jwt/utils');
const middleware = require('../jwt/middleware');
const defaultExpTime = Math.floor((moment().add(2, 'h')/ 1000))


router.get('/home', (req,res)=>{
    res.send('El routeo se ha establecido');
})

router.post('/registrado', (req,res)=>{
    const iss = 'user';

    const user = {
        _id: '1111',
        name:  'proscopio',
        password: '1234',
        iss
    }

    const token = jwtUtils.createToken(user,defaultExpTime);
    res.status(200).header('x-auth', token).send('Preparado el routeo al logueo');
})

router.get('/usuario', middleware.ensureAuthenticated, (req,res)=>{
    res.send(req.user);
})

module.exports= router;