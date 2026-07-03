const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const libroRoutes = require('./routes/libroRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Servirá tu vista HTML

// Conexión a MongoDB (Ajusta la URL si usas Atlas, aquí asumo local)
mongoose.connect('mongodb://127.0.0.1:27017/biblioteca_db')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB', err));

// Rutas
app.use('/api', libroRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});