const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    usuario: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario', 
        required: [true, 'El libro debe estar asignado a un usuario'] 
    },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editorial: { type: String },
    isbn: { type: String },
    genero: { type: String },
    paginas: { type: Number },
    fechaPublicacion: { type: Date },
    idioma: { type: String },
    estado: { type: String, default: 'Disponible' }
});

module.exports = mongoose.model('Libro', libroSchema);