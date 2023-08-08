const Practica = require('../../models/practica.model.js');
const mongoose = require('mongoose');

//  GET -  Función para obtener una practica por su id
exports.getPracticaById = async (req, res) => {
  try {
    const { id } = req.params;
    const practicaFind = await Practica.findById(id);
    if (!practicaFind) {
      return res.status(404).json({ error: 'Documento no encontrado' });
    }
    res.status(200).json(practicaFind);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllPracticas = async (req, res) => {
  try {
    const practicas = await Practica.find();

    if (!practicas) {
      return res.status(404).json({ error: 'Documento no encontrado' });
    }

    res.status(200).json(practicas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// POST  -  Funcion para crear una nueva practica
exports.createPractica = async (req, res) => {
  try {
    const practicas = new Practica({
        _idRecursos: req.body._idRecursos,
        _idComuna: req.body._idComuna,
        _idTipoPract: req.body._idTipoPract,
        _idRetroaliment: req.body._idRetroaliment,
        nombre: req.body.nombre,
        numCuadrilla: req.body.numCuadrilla,
        descripcion: req.body.descripcion,
        ejercicios: req.body.ejercicios,
        estado: req.body.estado,
        fecha: req.body.fecha,
        hora: req.body.hora,
        fechaHoraCreac: req.body.fechaHoraCreac
    });

    const nuevaPractica = await practicas.save();
    res.status(201).json(nuevaPractica);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT  -  Actualizar una práctica
exports.updatePract = async (req, res) => {
  try {
    const { id } = req.params;
    const { _idRecursos,_idComuna,_idTipoPract,_idRetroaliment, nombre, numCuadrilla, descripcion, ejercicios, estado, fecha, hora, fechaHoraCreac } = req.body;
    const updPract = await Practica.findByIdAndUpdate(
      id,
      { _idRecursos,_idComuna,_idTipoPract,_idRetroaliment, nombre, numCuadrilla, descripcion, ejercicios, estado, fecha, hora, fechaHoraCreac },
      { new: true }
    );
    res.status(200).json({ success: true, data: updPract });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: 'Error al actualizar la tarea' });
  }
};

//RF5 Eliminar practica
exports.deletePract = async (req, res) => {
  try {
    const { id } = req.params;
    await Practica.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: 'Tarea eliminada correctamente' });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: 'Error al eliminar la tarea' });
  }
};