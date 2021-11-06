const mongoose = require('mongoose');

let schema = new mongoose.Schema(
   {
      id: String,
      cedula: Number,
      nombre: String,
      apellido: String,
      edad: Number,
      activo: Boolean,
      usuario: String,
      contrasenia: String,
      genero: String
   }
);

module.exports = mongoose.model('usuario', schema, 'usuarios');