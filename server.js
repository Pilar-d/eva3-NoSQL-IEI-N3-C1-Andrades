const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Agregamos esto para asegurar las rutas
const libroRoutes = require('./routes/libroRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta absoluta a tu carpeta public (Mano santa para que no se pierda el HTML)
app.use(express.static(path.join(__dirname, 'public'))); 

// Conexión a MongoDB 
mongoose.connect('mongodb://127.0.0.1:27017/biblioteca_db')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB', err));

// Rutas
app.use('/api', libroRoutes);

// Cambiamos el puerto para evadir bloqueos de macOS
const PORT = 8080; 
app.listen(PORT, () => {
    console.log(`Servidor corriendo impecable en http://localhost:${PORT}`);
});