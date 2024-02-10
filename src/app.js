const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { body, validationResult } = require('express-validator');



const formularioContactoRoutes = require('./formContact'); 
const formularioCriaderoRoutes = require('./formHatchery'); 
const formularioLechigadaRoutes = require('./formLechigada'); 


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



// Ruta del formulario de contacto
app.use(formularioContactoRoutes);

// Ruta del formulario de criadero
app.use(formularioCriaderoRoutes);

// Ruta del formulario de lechigada
app.use(formularioLechigadaRoutes);






app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});



