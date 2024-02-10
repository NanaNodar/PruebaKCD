const express = require('express');
const { body, index, validationResult } = require('express-validator');

const router = express.Router();

const generarNombreCampoCachorro = (campo, indexCachorro) => `cachorros[${indexCachorro}].${campo}${indexCachorro}`;

const camposCachorros = ['nombre_cachorro_', 'sexo_cachorro_', 'color_cachorro_', 'patron_cachorro_', 'pelo_cachorro_', 'color_ojos_cachorro_', 'variedad_raza_cachorro_'];

const validarOtrosCampos = (req, res, next) => {
  const otrasValidaciones = [
     // DATOS DEL CRIADERO
    body('formData.fecha').notEmpty().withMessage('La fecha es obligatoria'),

    body('formData.nombre_criadero').notEmpty().withMessage('El nombre del criadero es obligatorio'),
    body('formData.nombre_criadero').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.nombre_criadero').trim(),
    body('formData.nombre_criadero').escape(),

    body('formData.numero_criadero').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.numero_criadero').notEmpty().withMessage('El numero de criadero es obligatorio'),
    body('formData.numero_criadero').trim(),
    body('formData.numero_criadero').escape(),

    body('formData.nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('formData.nombre').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.nombre').trim(),
    body('formData.nombre').escape(),

    body('formData.apellido').notEmpty().withMessage('El apellido es obligatorio'),
    body('formData.apellido').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.apellido').trim(),
    body('formData.apellido').escape(),

    body('formData.documento').notEmpty().withMessage('El documento es obligatorio'),
    body('formData.documento').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.documento').trim(),
    body('formData.documento').escape(),

    body('formData.celular').notEmpty().withMessage('El celular es obligatorio'),
    body('formData.celular').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.celular').trim(),
    body('formData.celular').escape(),

    body('formData.email').notEmpty().withMessage('El email es obligatorio'),
    body('formData.email').isEmail().withMessage('Escriba un correo electronico valido'),
    body('formData.email').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.email').normalizeEmail(),

    body('formData.domicilio').notEmpty().withMessage('El domicilo es obligatorio'),
    body('formData.domicilio').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.domicilio').trim(),
    body('formData.domicilio').escape(),

    body('formData.codigo_postal').notEmpty().withMessage('El codigo postal es obligatorio'),

    body('formData.ciudad').notEmpty().withMessage('La ciudad es obligatoria'),
    body('formData.ciudad').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.ciudad').trim(),
    body('formData.ciudad').escape(),

    body('formData.provincia').notEmpty().withMessage('La provincia es obligatoria'),
    body('formData.provincia').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.provincia').trim(),
    body('formData.provincia').escape(),

    body('formData.pais').notEmpty().withMessage('El país es obligatorio'),
    body('formData.pais').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.pais').trim(),
    body('formData.pais').escape(),

      // DATOS DE LA HEMBRA
    body('formData.raza_hembra').notEmpty().withMessage('La raza es obligatoria'),
    body('formData.raza_hembra').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.raza_hembra').trim(),
    body('formData.raza_hembra').escape(),

    body('formData.variedad_raza_hembra').notEmpty().withMessage('La variedad de la raza es obligatoria'),
    body('formData.variedad_raza_hembra').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.variedad_raza_hembra').trim(),
    body('formData.variedad_raza_hembra').escape(),

    body('formData.nombre_hembra').notEmpty().withMessage('El nombre de la hembra es obligatorio'),
    body('formData.nombre_hembra').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.nombre_hembra').trim(),
    body('formData.nombre_hembra').escape(),

    body('formData.color_hembra').notEmpty().withMessage('El color es obligatorio'),
    body('formData.color_hembra').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.color_hembra').trim(),
    body('formData.color_hembra').escape(),

    body('formData.patron_hembra').notEmpty().withMessage('El patron es obligatorio'),
    body('formData.patron_hembra').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.patron_hembra').trim(),
    body('formData.patron_hembra').escape(),

    body('formData.pelo_hembra').notEmpty().withMessage('El pelo es obligatorio'),
    body('formData.pelo_hembra').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.pelo_hembra').trim(),
    body('formData.pelo_hembra').escape(),

    body('formData.color_ojos_hembra').notEmpty().withMessage('El color de ojos es obligatorio'),

      // DATOS DEL MACHO
    body('formData.nombre_macho').notEmpty().withMessage('El nombre del macho es obligatorio'),
    body('formData.nombre_macho').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.nombre_macho').trim(),
    body('formData.nombre_macho').escape(),

    body('formData.variedad_raza_macho').notEmpty().withMessage('La variedad de la raza es obligatoria'),
    body('formData.variedad_raza_macho').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.variedad_raza_macho').trim(),
    body('formData.variedad_raza_macho').escape(),

    body('formData.color_macho').notEmpty().withMessage('El color es obligatorio'),
    body('formData.color_macho').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.color_macho').trim(),
    body('formData.color_macho').escape(),

    body('formData.patron_macho').notEmpty().withMessage('El patron es obligatorio'),
    body('formData.patron_macho').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.patron_macho').trim(),
    body('formData.patron_macho').escape(),

    body('formData.pelo_macho').notEmpty().withMessage('El pelo es obligatorio'),
    body('formData.pelo_macho').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.pelo_macho').trim(),
    body('formData.pelo_macho').escape(),

    body('formData.color_ojos_macho').notEmpty().withMessage('El color de ojos es obligatorio'),

      // DATOS DEL DUEÑO DEL MACHO 
    body('formData.nombre_titular').notEmpty().withMessage('El nombre es obligatorio'),
    body('formData.nombre_titular').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.nombre_titular').trim(),
    body('formData.nombre_titular').escape(),

    body('formData.apellido_titular').notEmpty().withMessage('El apellido es obligatorio'),
    body('formData.apellido_titular').isLength({ min: 3, max: 50 }).withMessage('El campo debe tener entre 3 y 50 caracteres'),
    body('formData.apellido_titular').trim(),
    body('formData.apellido_titular').escape(),  

    body('formData.fecha_servicio').notEmpty().withMessage('La fecha de servicio es obligatoria'),

    body('formData.fecha_nacimiento').notEmpty().withMessage('La fecha de nacimiento es obligatoria'), 

    body('formData.cantidad_machos').notEmpty().withMessage('La cantidad de machos es obligatoria'),

    body('formData.cantidad_hembras').notEmpty().withMessage('La cantidad de hembras es obligatoria'),
  ];

  const cachorros = req.body.cachorros || [];

  const validationsCachorros = cachorros.flatMap((cachorro, indexCachorro) =>
    camposCachorros.flatMap(campo => [
      body(generarNombreCampoCachorro(campo, indexCachorro)).notEmpty().withMessage(`Este campo es obligatorio.`),
      body(generarNombreCampoCachorro(campo, indexCachorro)).isLength({ min: 2, max: 50 }).withMessage(`Este campo debe tener entre 2 y 50 caracteres.`),
      body(generarNombreCampoCachorro(campo, indexCachorro)).trim(),
      body(generarNombreCampoCachorro(campo, indexCachorro)).escape(),
    ])
  );

  const allValidations = otrasValidaciones.concat(validationsCachorros);
    
  // Aplicar todas las validaciones
  allValidations.forEach(validation => validation(req, res, next));
  
};

router.post('/formulario-lechigada', validarOtrosCampos, (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // console.log('Errores de validación:', errors.array());
    return res.status(422).json({ errors: errors.array() });
  }
      
      const {
        fecha,
        nombre_criadero,
        numero_criadero,
        nombre,
        apellido,
        documento,
        celular,
        email,
        domicilio,
        codigo_postal,
        ciudad,
        provincia,
        pais,
        raza_hembra,
        variedad_raza_hembra,
        nombre_hembra,
        color_hembra,
        patron_hembra,
        pelo_hembra,
        color_ojos_hembra,
        nombre_macho,
        variedad_raza_macho,
        color_macho,
        patron_macho,
        pelo_macho,
        color_ojos_macho,
        nombre_titular,
        apellido_titular,
        fecha_servicio,
        fecha_nacimiento,
        cantidad_machos,
        cantidad_hembras,
        cachorros
      } = req.body;
  
      res.json({ success: true, message: 'Formulario validado con éxito' });   
  });

  module.exports = router;