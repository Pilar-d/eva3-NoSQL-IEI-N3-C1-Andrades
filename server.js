const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Usuario = require('./models/Usuario');
const Libro = require('./models/Libro');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/biblioteca_db')
    .then(() => console.log('✅ Conectado a MongoDB de forma impecable'))
    .catch(err => console.error('❌ Error de conexión en MongoDB:', err));

// --- ENDPOINTS DE USUARIOS ---
app.get('/api/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find({ activo: true });
        res.status(200).json(usuarios);
    } catch (error) { res.status(500).json({ error: error.message }); }
});

app.post('/api/usuarios', async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) { 
        console.error('\n========================================');
        console.error('❌ ERROR AL GUARDAR USUARIO EN MONGOOSE:');
        console.error(error.message);
        console.error('========================================\n');
        res.status(400).json({ error: error.message }); 
    }
});

app.delete('/api/usuarios/:id', async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        // Elimina en cascada los libros de este usuario para mantener el orden
        await Libro.deleteMany({ usuario: req.params.id });
        res.status(200).json({ mensaje: 'Usuario eliminado exitosamente' });
    } catch (error) { 
        res.status(500).json({ error: error.message }); 
    }
});

// --- ENDPOINTS DE LIBROS ---
app.get('/api/libros', async (req, res) => {
    try {
        const libros = await Libro.aggregate([
            {
                $lookup: {
                    from: 'usuarios',
                    localField: 'usuario',
                    foreignField: '_id',
                    as: 'datosUsuario'
                }
            },
            { $unwind: { path: '$datosUsuario', preserveNullAndEmptyArrays: true } }
        ]);
        res.status(200).json(libros);
    } catch (error) { res.status(500).json({ error: error.message }); }
});

app.post('/api/libros', async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.status(201).json(nuevoLibro);
    } catch (error) { 
        console.error('\n========================================');
        console.error('❌ ERROR AL GUARDAR LIBRO EN MONGOOSE:');
        console.error(error.message);
        console.error('========================================\n');
        res.status(400).json({ error: error.message }); 
    }
});

app.delete('/api/libros/:id', async (req, res) => {
    try {
        await Libro.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'Libro eliminado exitosamente' });
    } catch (error) { res.status(500).json({ error: error.message }); }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, '127.0.0.1', () => {
    console.log(`🚀 Servidor corriendo impecable en http://127.0.0.1:${PORT}`);
});