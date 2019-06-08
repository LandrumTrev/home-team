// ====================================================
// HomeTeam :: A team-based home chores tracker web app
// MVC with MySQL, Node, Express, Handlebars, and Sequelize ORM.
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// task.js - Model for a to-do item
// ====================================================

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    taskDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Task.associate = function(models) {
    Task.belongsTo(models.Member, {
      onDelete: "SET NULL",
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Task;
};
