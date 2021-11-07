// console.log("Hola mundo desde NodeJS")
// importacion paquetes JS
const express = require("express");
const mongoose = require("mongoose");
const TareaSchema = require("./Modelo/tarea.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Conexion BD
mongoose.connect(
    "mongodb://lorenabtz:DAW26@cluster-shard-00-00.traxj.mongodb.net:27017,cluster-shard-00-01.traxj.mongodb.net:27017,cluster-shard-00-02.traxj.mongodb.net:27017/ActividadesDB?ssl=true&replicaSet=atlas-ah758k-shard-0&authSource=admin&retryWrites=true&w=majority"
);

// Operaciones CRUD
router.get("/", (req, res) => {
    res.send("Hola mundo desde NodeJS");
});

router.post("/tarea", (req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.idTarea,
        nombreTarea: req.body.nombreTarea,
        detalleTarea: req.body.detalleTarea,
    });

    nuevaTarea.save((err, datos) => {
        if (err) {
            console.log(err);
        }
        res.send("Tarea Almacenada correctamente");
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo Port:3000");
});
