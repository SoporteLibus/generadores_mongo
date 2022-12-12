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
} = require('../controllers/index.controllers');
const cors = require('cors');


//routeamos las funciones al index.js

router.get('/generador_1',cors(),getgenerador_1);
router.get('/generador_2',cors(),getgenerador_2);
router.get('/datos_extras',cors(),getdatos_extra);
router.get('/generador_1/:id',cors(),getGenerador1ById)
router.get('/generador_2/:id',cors(),getGenerador2ById)
router.get('/datosExtras/:id',cors(),getDatosExtrasById)
router.post('/info',cors(),generador1);



module.exports=router;