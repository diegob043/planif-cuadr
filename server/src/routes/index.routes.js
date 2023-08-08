const express = require('express');                         // Importa el módulo 'express' para crear las rutas

const diegoRoutes = require('./diego.routes.js');     // Importa el enrutador de practicas

const router = express.Router();                            // Crea una instancia del enrutador

router.use('/diego', diegoRoutes);                   // Define las rutas para los usuarios /api/practicas

module.exports = router;                                    // Exporta el enrutador