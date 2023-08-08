// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colección 'usuarios'
const practicaSchema = new mongoose.Schema({
  _idRecursos: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  _idComuna: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  _idTipoPract: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  _idRetroaliment: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  nombre: {
    type: String,
  },
  numCuadrilla: {
    type: Number,
  },
  descripcion: {
    type: String,
  },
  ejercicios: {
    type: String,
  },
  estado: {
    type: String,
  },
  fecha: {
    type: String,
  },
  hora: {
    type: String,
  },
  fechaHoraCreac: {
    type: String,
  }

}, { collection: 'practicas',  versionKey: false});

const  Practica = mongoose.model('Practica', practicaSchema);// Crea el modelo de datos 'Practica' a partir del esquema 'practicaSchema'

module.exports = Practica;// Exporta el modelo de datos 'Usuario'