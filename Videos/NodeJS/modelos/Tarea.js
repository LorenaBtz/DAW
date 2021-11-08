const mongoose = require('mongoose');

let TareasSchema = new mongoose.Schema({
   idTarea: Number,
   nombreTarea: String,
   detalleTarea: String
});

module.exports = mongoose.model('tarea', TareasSchema, 'Tareas');