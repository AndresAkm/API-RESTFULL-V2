// Importamos mongoose para la creación de los schemas
const mongoose = require('../config/connetiondb')

// El esquema es basicamente eso xd, un molde en el cual se van a ingresar los datos a las colecciones creadas en la DB
const schemaProductos = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true,'El documento es obligatorio'],
        trim: true
    },

    contenido: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    disponible: {
        type: Boolean,
        default: true,
        required: [true,'La disponibilidad es obligatoria']
    }

}, {
    versionKey: false
})

const productos = mongoose.model('Productos', schemaProductos)
module.exports = productos