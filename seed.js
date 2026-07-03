const mongoose = require('mongoose');
const Usuario = require('./models/Usuario');
const Libro = require('./models/Libro');

async function insertarDatosDePrueba() {
    try {
        // Conectar a la base de datos
        await mongoose.connect('mongodb://127.0.0.1:27017/biblioteca_db');
        console.log('Conectado a la base de datos...');

        // 1. Limpiar las colecciones para empezar de cero (opcional pero recomendado para pruebas)
        await Usuario.deleteMany({});
        await Libro.deleteMany({});
        console.log('Colecciones limpiadas.');

        // 2. Crear un Usuario de prueba
        const nuevoUsuario = new Usuario({
            nombre: 'Juan Pérez',
            rut: '12345678-9',
            correo: 'juan.perez@ejemplo.cl',
            telefono: '+56912345678',
            fechaNacimiento: new Date('1990-05-15'),
            nacionalidad: 'CL',
            genero: 'M',
            direccion: {
                comuna: 'Temuco',
                calle: 'Avenida Caupolicán',
                numero: '1234',
                depto: '12B'
            },
            contrasena: 'MiClaveSecreta123' // Esto se encriptará automáticamente gracias a tu modelo
        });

        const usuarioGuardado = await nuevoUsuario.save();
        console.log(`Usuario creado con éxito: ${usuarioGuardado.nombre}`);

        // 3. Crear un Libro asociado a ese Usuario
        const nuevoLibro = new Libro({
            usuario: usuarioGuardado._id, // Aquí hacemos la relación 1:N
            titulo: 'Cien Años de Soledad',
            autor: 'Gabriel García Márquez',
            editorial: 'Sudamericana',
            isbn: '978-0307474728',
            genero: 'Novela',
            paginas: 417,
            fechaPublicacion: new Date('1967-05-30'),
            idioma: 'Español',
            estado: 'Disponible'
        });

        await nuevoLibro.save();
        console.log(`Libro creado con éxito y asociado a ${usuarioGuardado.nombre}`);

        // Cerrar la conexión
        mongoose.connection.close();
        console.log('Conexión cerrada. ¡Todo listo!');

    } catch (error) {
        console.error('Hubo un error al insertar los datos:', error);
        mongoose.connection.close();
    }
}

insertarDatosDePrueba();