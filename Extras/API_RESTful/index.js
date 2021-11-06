var express = require("express"),
   app = express(),
   bodyParser = require("body-parser"),
   methodOverride = require("method-override"),
   mongoose = require("mongoose");

// Connection to DB
mongoose.connect(
  "mongodb://lorenabtz:nVDX6Qfg9CbK3gI5@restfulapi-shard-00-00.tzckk.mongodb.net:27017,restfulapi-shard-00-01.tzckk.mongodb.net:27017,restfulapi-shard-00-02.tzckk.mongodb.net:27017/dbTVshows?ssl=true&replicaSet=atlas-yxp4rb-shard-0&authSource=admin&retryWrites=true&w=majority",
  function (err, res) {
    if (err) throw err;
    console.log("Connected to Database");
  }
);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());

// Import Models and controllers
var models = require("./models/tvshows.js")(app, mongoose);
var TVShowCtrl = require("./controllers/tvshows");

// Example Route
var router = express.Router();
router.get("/", function (req, res) {
   res.send("Hello world!");
});
app.use(router);

// API routes
var tvshows = express.Router();

tvshows
   .route("/tvshows")
   .get(TVShowCtrl.findAllTVShows)
   .post(TVShowCtrl.addTVShow);

tvshows
   .route("/tvshows/:id")
   .get(TVShowCtrl.findById)
   .put(TVShowCtrl.updateTVShow)
   .delete(TVShowCtrl.deleteTVShow);

app.use("/api", tvshows);

// Start server
app.listen(3000, function () {
   console.log("Node server running on http://localhost:3000");
});
