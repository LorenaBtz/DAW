// Express => CRUD Template
const express = require('express');
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mongoose => Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect(
   'mongodb+srv://lorenabtz:DAW26@cluster0.x0nhw.mongodb.net/test?authSource=admin&replicaSet=atlas-uj7wyq-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
);

// Schema => MongoDB
const userSchema = require('./Modelos/usuarios.js');

// CRUD => Create Read Update Delete
app.get(
   '/',
   function(req, res) {
      res.send("<H1>Hello World</H1>");
   }
);

app.post(
   '/Usuarios',
   (req, res) => {
   const data = req.body;

      let usuario = new userSchema({
         cedula: data.cedula,
         nombre: data.nombre,
         apellido: data.apellido,
         edad: data.edad,
         activo: data.activo,
         usuario: data.usuario,
         contrasenia: data.contrasenia,
         genero: data.genero
   }
);

// Connect => Start Server
const port = 3000; // default port

app.use(router);
app.listen(port, () => 
   console.log(`Server is running on http://localhost:${port}`)
);