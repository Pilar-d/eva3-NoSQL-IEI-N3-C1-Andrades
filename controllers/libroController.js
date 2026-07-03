const Libro = require('../models/Libro');
const mongoose = require('mongoose');

// Método POST para registrar un libro
exports.crearLibro = async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.status(201).json({ mensaje: 'Libro registrado con éxito', libro: nuevoLibro });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Método GET con Agregación $lookup
exports.obtenerLibros = async (req, res) => {
    try {
        const libros = await Libro.aggregate([
            {
                $lookup: {
                    from: 'usuarios', // Nombre exacto de la colección en la BD (Mongoose la pone en minúscula y plural)
                    localField: 'usuario',
                    foreignField: '_id',
                    as: 'datosUsuario'
                }
            },
            {
                $unwind: '$datosUsuario' // Desarma el arreglo para que sea un objeto plano
            }
        ]);
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};