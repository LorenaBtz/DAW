const mongoose = require('mongoose');

let schema = new mongoose.Schema(
   {
      id: String,
      cedula: number,
      nombre: String,
      apellido: String,
      edad: number,
      activo: boolean,
      usuario: String,
      contrasenia: String,
      genero: String
   }
);

module.exports = mongoose.model('usuario', schema, 'usuarios');