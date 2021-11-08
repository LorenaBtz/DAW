// console.log("Hola Mundo desde NodeJS");

// Importar paquetes
const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require('./modelos/Tarea.js');

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = process.env.PORT || 3000;

// Conexion a Base de SchemaDateOptions
mongoose.connect(
   "mongodb+srv://lorenabtz:DAW26@cluster.traxj.mongodb.net/ActividadesDB?retryWrites=true&w=majority"
);

// Operaciones CRUD
router.get(
   '/', 
   (req, res) => {
      res.send('Hola Mundo desde NodeJS');
   }
);

router.get(
   '/tareas',
   (req, res) => {
      TareaSchema.find({}).then(
         (tareas) => {
            res.json({tareas});
         }).catch((err) => {
            res.sendStatus(500);
            console.log(err && err.message);
   });
});

router.get(
   '/tareas/:id/',
   (req, res) => {
      TareaSchema.findById(
         req.params.id).then(tareas => {
            if (!tareas) {
               return res.status(404).send({
                  message: "Tarea no encontrada"
               });
            } else {
               res.send(tareas);
            }
         }).catch(err => {
            res.status(500).send({
               code: 500,
               message: err.message || "Error al obtener la tarea"
            });
         });
   }
);

router.post("/nuevaTarea", (req, res) => {
   let nuevaTarea = new TareaSchema({
      idTarea: req.body.id,
      nombreTarea: req.body.nombre,
      detalleTarea: req.body.detalle,
   });

   nuevaTarea.save(function (err, datos) {
      if (err) {
         console.log(err);
         res.send(err);
      }
      res.send("Tarea Almacenada Correctamente");
   });
});

router.put(
   '/cambiarTarea/:id',
   (req, res) => {
      // res.send({type: 'PUT'});
      (req, res) => {
         TareaSchema.findById(
            req.params.id,
            (err, tarea) => {
               if (!tarea) {
                  return res.status(404).send({
                     message: "Tarea no encontrada"
                  });
               } else {
                  tarea.idTarea = req.body.id;
                  tarea.nombreTarea = req.body.nombre;
                  tarea.detalleTarea = req.body.detalle;
                  
                  tarea.save(function (err, datos) {
                     if (err) {
                        console.log(err);
                        res.send(err);
                     }
                     res.send("Tarea Actualizada Correctamente" + datos);
                     res.json(datos);
                  });
               }
            }
         );
      }
   }
);

router.delete(
   '/eliminarTarea/:id',
   (req, res) => {
      let id = req.params.id;

      TareaSchema.findByIdAndDelete(
         id,
         (err, tareaEliminada) => {
            if (err) {
               res.sendStatus(500).send(err);
            }
            if (!tareaEliminada){
               res.sendStatus(404).send("Tarea no encontrada");
            }

            res.send("Tarea Eliminada Correctamente");
         }
      );
   }
);

// Abre el servidor por el puerto 3000
app.use(router);
app.listen(
   port,
   () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
   }
);