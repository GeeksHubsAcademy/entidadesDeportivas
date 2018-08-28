const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT= process.env.PORT||5000;

app.use(bodyParser.json());

app.use('/', require('./routes/index'));

app.listen(PORT, ()=>{
    console.log('Servidor Express listo corriendo en http://localhost:3000/home');
});