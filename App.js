const express = require('express');
const app = express();
const PORT=3000;

app.use('/', require('./routes/index.js'));

app.listen(PORT, ()=>{
    console.log('Servidor Express listo corriendo en http://localhost:3000/home');
})

module.exports = app;