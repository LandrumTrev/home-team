// ====================================================
// HomeTeam :: A team-based home chores tracker web app
// MVC with MySQL, Node, Express, Handlebars, and Sequelize ORM.
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// server.js - Express server functions
// ====================================================


// Express server
// ====================================================
// require the Express server module
var express = require("express");
// set port to run either on Heroku default or 8080 for localhost
var PORT = process.env.PORT || 8080;
// shorthand handle for running Express module, to access its method
var app = express();
// allow static files (css, js, html) to be served from the PUBLIC folder
app.use(express.static("public"));
// allow Express to parse URLs, and include encoded Arrays and Objects
app.use(express.urlencoded({
  extended: true
}));
// allow Express to parse JSON body data
app.use(express.json());


// Handlebars template engine
// ====================================================
// require the Express-version of Handlebars HTML templating engine
var exphbs = require("express-handlebars");
// use express().engine method to set Handlebars as HTML template engine
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
// use express().set to Handlebars as the View Engine
app.set("view engine", "handlebars");


// Sequelize ORM
// ====================================================
// access the database via Sequelize's models/index.js functions
var db = require("./models");


// Router
// =============================================================
// import express.Router() method route definitions exported by router_controller.js
var routes = require("./controllers/router_controller.js");
// tell Express (app) to .use the (routes) exported from router_controller.js
app.use(routes);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});