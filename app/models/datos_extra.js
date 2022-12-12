const mongoose = require('mongoose');

const DatosExtraSchema = new mongoose.Schema({
    rtp: {
        type: String,
        trim: true,
        maxlength: [10, "El maximo son 10 caracteres"]
    },
    rt1: {
        type: String,
        trim: true,
        maxlength: [10, "El maximo son 10 caracteres"]
    },
    rt2: {
        type: String,
        trim: true,
        maxlength: [10, "El maximo son 10 caracteres"]
    },
    rt3: {
        type: String,
        trim: true,
        maxlength: [10, "El maximo son 10 caracteres"]
    },
    rtplh: {
        type: String,
        trim: true,
        maxlength: [10, "El maximo son 10 caracteres"]
    },
    rt1lh: {
        type: String,
        trim: true,
        maxlength: [10, "El maximo son 10 caracteres"]
    },
    rt2lh: {
        type: String,
        trim: true,
        maxlength: [10, "El maximo son 10 caracteres"]
    },
    rt3lh: {
        type: String,
        trim: true,
        maxlength: [10, "El maximo son 10 caracteres"]
    },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.models.datos_extra || mongoose.model('datos_extra', DatosExtraSchema);