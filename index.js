require("dotenv").config();
var express = require("express");
var app = express();
var sequelize = require("./db");
var user = require("./controllers/user-controller");
let animal = require('./controllers/animal-controller');

app.use(express.json());

sequelize.sync();

app.use(require("./middleware/headers"));

app.use("/user", user);
app.use('/animal', animal);

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
