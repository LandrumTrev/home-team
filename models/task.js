// ====================================================
// HomeTeam :: A team-based home chores tracker web app
// MVC with MySQL, Node, Express, Handlebars, and Sequelize ORM.
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// task.js - Model for a to-do item
// ====================================================

// export Task model as anon function, pass in a config call of sequelize and DataTypes
// used by models/index.js to include in list of all Sequelize models
module.exports = function (sequelize, DataTypes) {

  // Model's properties, with validation:
  // ===========================================================
  // define Task as a Sequelize model object
  var Task = sequelize.define("Task", {

    // define data column for Task "chore" (text of thing to be done)
    chore: {
      // DataTypes is STRING = VARCHAR(255)
      type: DataTypes.STRING,
      // must have a value
      allowNull: false,
      // value must have at least 1 char length
      validate: {
        len: [1]
      }
    },
    // define data column for Task "done" (Boolean value for Task complete or not)
    done: {
      // type is Boolean, value in db will be 0 (false) or 1 (true)
      type: DataTypes.BOOLEAN,
      // set a new Task's default "done" value as false (1), not done yet
      defaultValue: false
    }
  });

  Task.associate = function (models) {
    // a Task belongsTo a Member, and has a foreignKey for that Member,
    // but that foreignKey is allowed to be NULL, 
    // so a Member can be assigned task either before or after it is done
    Task.belongsTo(models.Member, {
      foreignKey: {
        allowNull: true
      }
    });
  }
  // return Task var as the value of the module.exports anon function of member.js
  return Task;
  // table in database will be called "tasks" plural
};