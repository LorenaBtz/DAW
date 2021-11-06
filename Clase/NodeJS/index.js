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

      try {
         const data = req.body;

         let usuario = new userSchema({
            id: data.id,
            cedula: data.cedula,
            nombre: data.nombre,
            apellido: data.apellido,
            edad: data.edad,
            activo: data.activo,
            usuario: data.usuario,
            contrasenia: data.contrasenia,
            genero: data.genero
         });
         
         usuario.save(
            function(err, data) {
               if (err) {
                  res.send('Error al crear usuario: ' + err.message);
               } else {
                  res.send('Usuario creado correctamente: ' + JSON.stringify(data.usuario));
               }
            }
         );
      } catch (error) {
         res.send('Ocurrio una Excepcion: ' + error.message);
      }
   }
);

// Connect => Start Server
const port = 3000; // default port

app.use(router);
app.listen(port, () => 
   console.log(`Server is running on http://localhost:${port}`)
);