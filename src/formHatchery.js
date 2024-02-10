const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post('/formulario-criadero', [
    // DATOS DEL CRIADERO
  body('fecha').notEmpty().withMessage('La fecha es obligatoria'),
  body('nombre_criadero1').notEmpty().withMessage('El nombre del criadero es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('nombre_criadero2').notEmpty().withMessage('El nombre del criadero es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('nombre_criadero3').notEmpty().withMessage('El nombre del criadero es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('raza').notEmpty().withMessage('La raza es obligatoria')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
    // DATOS DEL TITULAR
  body('nombre').notEmpty().withMessage('El nombre es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('apellido').notEmpty().withMessage('El apellido es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(), 
  body('documento').notEmpty().withMessage('El documento es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),    
  body('celular').notEmpty().withMessage('El celular es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),   
  body('email').notEmpty().withMessage('El email es obligatorio')
                .isEmail().withMessage('Escriba un correo electronico valido')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').normalizeEmail(),
    // DATOS DEL 2DO TITULAR - condicional
  body('section').if(body('mostrarForm').equals('1')).notEmpty().withMessage('Por favor, elige una opción'),
  body('nombre_titular2').if(body('mostrarForm').equals('1')).notEmpty().withMessage('El nombre es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('apellido_titular2').if(body('mostrarForm').equals('1')).notEmpty().withMessage('El apellido es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('documento_titular2').if(body('mostrarForm').equals('1')).notEmpty().withMessage('El documento es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('celular_titular2').if(body('mostrarForm').equals('1')).notEmpty().withMessage('El celular es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('email_titular2').if(body('mostrarForm').equals('1')).notEmpty().withMessage('El email es obligatorio')
                .isEmail().withMessage('Escriba un correo electronico valido')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').normalizeEmail(),
    // DATOS DEL LUGAR FÍSICO DEL CRIADERO
  body('domicilio').notEmpty().withMessage('El domicilio del criadero es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('codigo_postal').notEmpty().withMessage('El codigo postal del criadero es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('ciudad').notEmpty().withMessage('La ciudad del criadero es obligatoria')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('provincia').notEmpty().withMessage('La provincia es obligatoria')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('pais').notEmpty().withMessage('El pais es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
], (req, res) => {
    const errorsCriadero1 = validationResult(req);

    if (!errorsCriadero1.isEmpty()) {
      return res.status(422).json({ errors: errorsCriadero1.array() });
    }
    
    const {
        fecha,
        nombre_criadero1,
        nombre_criadero2,
        nombre_criadero3,
        raza,
        nombre,
        apellido,
        documento,
        celular,
        email,
        nombre_titular2,
        apellido_titular2,
        documento_titular2,
        celular_titular2,
        email_titular2,
    } = req.body;    

    res.json({ success: true, message: 'Formulario validado con éxito' });
});

module.exports = router;
