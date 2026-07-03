const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    rut: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String },
    fechaNacimiento: { 
        type: Date,
        validate: {
            validator: function(v) { return v < new Date(); },
            message: 'La fecha de nacimiento debe ser anterior a la actual.'
        }
    },
    nacionalidad: { type: String, required: true },
    genero: { type: String, enum: ['M', 'F', 'O'] },
    direccion: {
        comuna: { type: String, required: true },
        calle: { type: String, required: true },
        numero: { type: String, required: true },
        depto: { type: String }
    },
    contrasena: { type: String, required: true },
    fechaRegistro: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

// Encriptar la contraseña antes de guardar (Criterio 2)
usuarioSchema.pre('save', async function() {
    if (!this.isModified('contrasena')) return;
    const salt = await bcrypt.genSalt(10);
    this.contrasena = await bcrypt.hash(this.contrasena, salt);
});

module.exports = mongoose.model('Usuario', usuarioSchema);