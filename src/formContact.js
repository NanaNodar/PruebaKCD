const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const fileUpload = require('express-fileupload');

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false,
  auth: {
    user: 'prueba@kcd.kennelclubdigital.com',
    pass: 'Probando#123',
  },
});

const router = express.Router();
// Middleware para manejar la carga de archivos
router.use(fileUpload());


router.post('/formulario', [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('apellido').notEmpty().withMessage('El apellido es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('telefono').notEmpty().withMessage('El teléfono es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('email').notEmpty().withMessage('El email es obligatorio')
                .isEmail().withMessage('Escriba un correo electronico valido')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').normalizeEmail(),
  body('ciudad').notEmpty().withMessage('La ciudad es obligatoria')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('provincia').notEmpty().withMessage('La provincia es obligatoria')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('pais').notEmpty().withMessage('El país es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('asunto').notEmpty().withMessage('El asunto es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
  body('mensaje').notEmpty().withMessage('El mensaje es obligatorio')
                .isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres').trim().escape(),
                
  ], (req, res) => {
  try {
    console.log('Archivo:', req.file);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    if (!req.file || Object.keys(req.file).length === 0) {
      return res.status(400).json({ error: 'No se proporcionó ningún archivo.' });
    }

    const archivo = req.file;

    const {
        nombre,
        apellido,
        telefono,
        email,
        ciudad,
        provincia,
        pais,
        asunto,
        mensaje,
    } = req.body;    


  // Enviar correo electrónico
  const mailOptions = {
    from: 'prueba@kcd.kennelclubdigital.com',
    to: 'aitana_villalba@outlook.com', 
    subject: 'Nuevo formulario de contacto',
    text: `Nombre: ${req.body.nombre}\nEmail: ${req.body.email}\nMensaje: ${req.body.mensaje}`,
    attachments: [
      {
        filename: archivo.name,
        path: __dirname + archivo.name,
      },
    ],
  };

  
  transporter.sendMail(mailOptions);

  res.json({ success: true, message: 'Formulario validado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el formulario.');
  }
});


module.exports = router;