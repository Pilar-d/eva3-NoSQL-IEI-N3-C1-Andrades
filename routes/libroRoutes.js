const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

router.post('/libros', libroController.crearLibro);
router.get('/libros', libroController.obtenerLibros);

module.exports = router;