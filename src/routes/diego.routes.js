const express = require('express');// Importa el módulo 'express' para crear las rutas
const practicaController = require('../controllers/diego/practica.controller.js');// Importa el controlador de practicas
const router = express.Router();// Crea una instancia del enrutador

// Define las rutas para las practicas
router.get('/:id', practicaController.getPracticaById);
router.get('/',practicaController.getAllPracticas);
router.post('/', practicaController.createPractica);
router.put('/:id',practicaController.updatePract);
router.delete('/:id',practicaController.deletePract);

module.exports = router;// Exporta el enrutador