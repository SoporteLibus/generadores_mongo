const { Router } = require('express');
const router = Router();
const {
    getgenerador_1,
    getgenerador_2,
    getdatos_extra,
    getGenerador1ById,
    getGenerador2ById,
    getDatosExtrasById,
    generador1,
    generador2,
    datosExtra
} = require('../controllers/index.controllers');
const cors = require('cors');


//routeamos las funciones al index.js

router.get('/generador_1', cors(), getgenerador_1);
router.get('/generador_2', cors(), getgenerador_2);
router.get('/datos_extra', cors(), getdatos_extra);
router.get('/generador_1/:id', cors(), getGenerador1ById);
router.get('/generador_2/:id', cors(), getGenerador2ById);
router.get('/datos_extra/:id', cors(), getDatosExtrasById);
router.post('/generador_1', cors(), generador1);
router.post('/generador_2', cors(), generador2);
router.post('/datos_extra', cors(), datosExtra);



module.exports=router;