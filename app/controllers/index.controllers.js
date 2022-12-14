const dbConnect = require('../../config/mongo');
const Generador2 = require('../models/generador_2');
const Generador1 = require('../models/generador_1');
const DatosExtra = require('../models/datos_extra');

//conexion a MongoDB
dbConnect()

//mostrar los datos
const getgenerador_1 = async (req, res) => {
    const response = await Generador1.find({})
    res.status(200).json(response);
}

const getgenerador_2= async(req,res)=>{
    const response= await Generador2.find({})
    res.status(200).json(response);
}

const getdatos_extra= async(req,res)=>{
    const response= await DatosExtra.find({})
    res.status(200).json(response);
}

const generador2 = async (req, res) => {
    const { R1,R2,R3,R4,R5,R6,R7,R8,R9,R10,R11,R12,R13,R14,R15,R16,R17,R18,R19,R20,R55,R56,R57,R58,R59,R60,R61,R62,R63,R64,R65,R66,R67,R68,R69,R70,R71,R72 } = req.body
    const response = await Generador2.create([
          {
            r1: R1,r2: R2,r3: R3,r4: R4,r5: R5,r6: R6,r7: R7,r8: R8,r9: R9,r10: R10,
            r11: R11, r12: R12, r13: R13, r14: R14, r15: R15, r16: R16, r17: R17, r18: R18,
            r19: R19, r20: R20, r55: R55, r56: R56, r57: R57, r58: R58, r59: R59, r60: R60,
            r61: R61, r62: R62, r63: R63, r64: R64, r65: R65, r66: R66, r67: R67, r68: R68,
            r69: R69, r70: R70, r71: R71, r72: R72
          },
    ]);

    res.json({
        message:'orden enviada con exito',
        body:{
            'r1':R1,
            'r2':R2,
            'r3':R3,
            'r4':R4,
            'r5':R5,
            'r6':R6,
            'r7':R7,
            'r8':R8,
            'r9':R9,
            'r10':R10,
            'r11':R11,
            'r12':R12,
            'r13':R13,
            'r14':R14,
            'r15':R15,
            'r16':R16,
            'r17':R17,
            'r18':R18,
            'r19':R19,
            'r20':R20,
            'r55':R55,
            'r56':R56,
            'r57':R57,
            'r58':R58,
            'r59':R59,
            'r60':R60,
            'r61':R61,
            'r62':R62,
            'r63':R63,
            'r64':R64,
            'r65':R65,
            'r66':R66,
            'r67':R67,
            'r68':R68,
            'r69':R69,
            'r70':R70,
            'r71':R71,
            'r72':R72,  
        }
    })
}

const datosExtra = async (req, res) => {
    const { RTP, RT1, RT2, RT3, RTPLH, RT1LH, RT2LH, RT3LH } = req.body
    const response = await DatosExtra.create([
          {
            rtp: RTP, rtl: RT1, rt2: RT2, rt3: RT3, rtplh: RTPLH,
            rt1lh: RT1LH, rt2lh: RT2LH, rt3lh: RT3LH
          },
    ]);

    res.json({
        message:'orden enviada con exito',
        body:{
            'rtp': RTP,
            'rtl': RT1,
            'rt2': RT2,
            'rt3': RT3,
            'rtplh': RTPLH,
            'rt1lh': RT1LH,
            'rt2lh': RT2LH,
            'rt3lh': RT3LH
          }
    })
}

const generador1 = async (req, res) => {
    const { R1,R2,R3,R4,R5,R6,R7,R8,R9,R10,R11,R12,R13,R14,R15,R16,R17,R18,R19,R20,R55,R56,R57,R58,R59,R60,R61,R62,R63,R64,R65,R66,R67,R68,R69,R70,R71,R72 } = req.body
    const response = await Generador1.create([
        {
        r1: R1,r2: R2,r3: R3,r4: R4,r5: R5,r6: R6,r7: R7,r8: R8,r9: R9,r10: R10,
        r11: R11, r12: R12, r13: R13, r14: R14, r15: R15, r16: R16, r17: R17, r18: R18,
        r19: R19, r20: R20, r55: R55, r56: R56, r57: R57, r58: R58, r59: R59, r60: R60,
        r61: R61, r62: R62, r63: R63, r64: R64, r65: R65, r66: R66, r67: R67, r68: R68,
        r69: R69, r70: R70, r71: R71, r72: R72
        },
    ]);

    res.json({
        message:'orden enviada con exito',
        body:{
            'r1':R1,
            'r2':R2,
            'r3':R3,
            'r4':R4,
            'r5':R5,
            'r6':R6,
            'r7':R7,
            'r8':R8,
            'r9':R9,
            'r10':R10,
            'r11':R11,
            'r12':R12,
            'r13':R13,
            'r14':R14,
            'r15':R15,
            'r16':R16,
            'r17':R17,
            'r18':R18,
            'r19':R19,
            'r20':R20,
            'r55':R55,
            'r56':R56,
            'r57':R57,
            'r58':R58,
            'r59':R59,
            'r60':R60,
            'r61':R61,
            'r62':R62,
            'r63':R63,
            'r64':R64,
            'r65':R65,
            'r66':R66,
            'r67':R67,
            'r68':R68,
            'r69':R69,
            'r70':R70,
            'r71':R71,
            'r72':R72,  
        }
    })
    
}


//mostrar un dato
const getGenerador1ById = async (req, res) => {
    const id = req.params.id; // ejemplo: '2022-12-13'
    const fechaInicial = id.replaceAll("-",",")
    const fechaFinal = id.substring(0,8).concat(Number(id.substring(8)) + 1);
    const response = await Generador1.find({
    createdAt: { $gte: new Date(fechaInicial), $lt: new Date(fechaFinal) }
    }, (err, actividad) => {
        if(err) {
            console.log(err.message);
            return res.status(500).json({
                error: err.message
            });
        } else {
            if(actividad.length === 0) {  // si no se consiguen documentos
                return res.status(400).json({
                    message: 'No se ha encontrado actividad con la fecha dada.'
                });
            } else {
                return res.status(200).json(actividad);
            }
        }
    }).clone().catch(function(err){ console.log(err)})
}

const getGenerador2ById=async (req,res)=>{
    const id = req.params.id; // ejemplo: '2022-12-13'
    const fechaInicial = id.replaceAll("-",",")
    const fechaFinal = id.substring(0,8).concat(Number(id.substring(8)) + 1);
    const response = await Generador2.find({
    createdAt: { $gte: new Date(fechaInicial), $lt: new Date(fechaFinal) }
    }, (err, actividad) => {
        if(err) {
            console.log(err.message);
            return res.status(500).json({
                error: err.message
            });
        } else {
            if(actividad.length === 0) {  // si no se consiguen documentos
                return res.status(400).json({
                    message: 'No se ha encontrado actividad con la fecha dada.'
                });
            } else {
                return res.status(200).json(actividad);
            }
        }
    }).clone().catch(function(err){ console.log(err)})
}

const getDatosExtrasById=async (req,res)=>{
    const id = req.params.id; // ejemplo: '2022-12-13'
    const fechaInicial = id.replaceAll("-",",")
    const fechaFinal = id.substring(0,8).concat(Number(id.substring(8)) + 1);
    const response = await DatosExtra.find({
    createdAt: { $gte: new Date(fechaInicial), $lt: new Date(fechaFinal) }
    }, (err, actividad) => {
        if(err) {
            console.log(err.message);
            return res.status(500).json({
                error: err.message
            });
        } else { 
            if(actividad.length === 0) {  // si no se consiguen documentos
                return res.status(400).json({
                    message: 'No se ha encontrado actividad con la fecha dada.'
                });
            } else {
                return res.status(200).json(actividad);
            }
        }
    }).clone().catch(function(err){ console.log(err)})
}

//exportar modulos
module.exports = {
    getgenerador_1,
    getgenerador_2,
    getdatos_extra,
    getGenerador1ById,
    getGenerador2ById,
    getDatosExtrasById,
    generador1,
    generador2,
    datosExtra
}