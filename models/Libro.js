const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    // Relación 1:N con Usuario (Criterio 8)
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    titulo: { type: String, required: true },
    autor: String,
    editorial: String,
    isbn: String,
    genero: String,
    paginas: Number,
    fechaPublicacion: Date,
    idioma: String,
    estado: String
});

module.exports = mongoose.model('Libro', libroSchema);