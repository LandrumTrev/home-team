// ====================================================
// HomeTeam :: A team-based home chores tracker web app
// MVC with MySQL, Node, Express, Handlebars, and Sequelize ORM.
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// router_controller.js - required as "routes" by server.js, 
// calls Handlebars to render page views for various route calls
// ====================================================


// REQUIRE EXPRESS:
// ========================================================
// require the Express server to use its methods
var express = require("express");
// also require Express' Router to use Express Router methods
var router = express.Router();


// REQUIRE MODELS:
// ========================================================
// to access Sequelize model methods which interface with the database
// requiring the models dir implies models/index.js which bundles all models
var db = require("../models");


// DEFINE ROUTES:
// ========================================================

// GET route listens for calls on the home page (domain/index) route "/"
// and also defines a callback function(req, res)
// that tells Express server what to do with both incoming data (req), 
// and how to respond (res) to a call on that route
router.get("/", function (req, res) {

  // call Sequelize .findAll() query on db.Task model
  db.Task.findAll({
    // include all associated db.Member data for all Tasks
    include: [db.Member],
    // and return them in ascending order, from first created to latest last
    order: [
      ["createdAt", "ASC"]
    ]
  }).then(function (dbTasks) {

    // create an object with "items" as a [key] name,
    // with .findAll() data returned (dbTasks) as tasks: value
    var hbsObject = {
      tasks: dbTasks
    };

    // console the hbsObject to see all data returned
    console.log(hbsObject);

    // then as the result (res) of router.get("/", ...),
    // .render index.handlebars and include the hbsObject returned data
    res.render("index", hbsObject);

  });

}); // end router.get() controller for "/"


// ========================================================

// POST takes new item from HTML, makes an object, and creates new row in database
// route posted to with submit button handler in public/assets/js/todolist.js
router.post("/api/items", function (req, res) {

  // String "false" needs to be converted to Boolean false
  var doneBoolean = JSON.parse(req.body.done);

  // call the item.insertOne(cols, vals, cb) method from item.js
  item.insertOne([

    // pass in (cols), the column names (an array) with hard-coded values
    "item", "done"
  ], [
    // also pass in (vals), form values of item: and done: from todolist.js
    // use converted doneBoolean (false) instead of req.body.done ("false")
    req.body.item, doneBoolean

    // and pass in a function to handle data returned by item.insertOne()
  ], function (result) {

    // as router.post()'s response (res), return JSON...
    res.json({

      // for the id number of the item inserted into the database
      id: result.insertId

    }); // end res.json()

  }); // end insertOne()

}); // end router.post()


// ========================================================

// PUT updates an item 
// identifies item to update by id number passed at end of URL
router.put("/api/items/:id", function (req, res) {

  // create variable for the id passed at the end of the URL
  var condition = "id = " + req.params.id;

  // log the id number passed to check it
  console.log("condition", condition);

  // convert String value of done: ("true"|"false") to Boolean (true|false)
  // grabs the Handlebars partial include swapped/opposite done: value, 
  // in order to have it to set as the new value in the database
  var doneBoolean = JSON.parse(req.body.done);

  // call the item.updateOne() method in model/item.js
  // first item passed in as (objColVals) is an object: {done: true|false}
  // second item passed in as (condition) is id: of item to update
  // third item passed in as (cb) is callback function 
  // to handle results from orm.updateOne to item.updateOne
  item.updateOne({
    done: doneBoolean
  }, condition, function (result) {
    // callback function to handle results from orm.updateOne to item.updateOne
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      // otherwise if item updated, send 200, everything good
      res.status(200).end();
    }
  });
});


// ========================================================

// DELETE an item from the todo list
// takes a call from delete-item event handler in todolist.js
router.delete("/api/items/:id", function (req, res) {

  // conditional-format String for the deleted item's id, example "id = 12"
  var condition = "id = " + req.params.id;

  // call the item.delete() method imported from item.js
  // pass in the condition String for the id number, and a callback function
  item.delete(condition, function (result) {
    // callback handles data returned by item.delete() in item.js,
    // which gets its callback data from orm.delete in orm.js
    if (result.affectedRows == 0) {
      // if no rows affected (so, nothing deleted), return 404 (not found)
      return res.status(404).end();
    } else {
      // otherwise (if item was deleted), return 200 (everything good)
      res.status(200).end();
    }
  });
});


// ========================================================


// Export routes for server.js to use.
module.exports = router;