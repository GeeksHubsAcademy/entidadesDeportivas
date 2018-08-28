const express = require('express');
const router = express.Router();
const moment = require('moment');

const jwtUtils = require('../jwt/utils');
const middleware = require('../jwt/middleware');

const ApiEntities = require('../api/Entity.api')


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

//consulta de las entidades

router.get('/entidades', ApiEntities.EntityFindAll)

router.get('/entidadesFiltradas', (req,res)=>{
    const entity = {
        sport_id: '2', 
        city: 'València'
    }
    ApiEntities.EntityFindByCityAndDiscipline(req,res,entity);
})

router.get('/metricas/:precio/:numero', (req,res)=>{
    const userRequest = {
        request: req.params.numero,
        objective:req.params.precio
    }
    
    ApiEntities.EntityFindByUserRequest(req,res,userRequest);
})

module.exports= router;