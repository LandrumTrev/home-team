// ====================================================
// HomeTeam :: A team-based home chores tracker web app
// MVC with MySQL, Node, Express, Handlebars, and Sequelize ORM.
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// member.js - Model for a team member
// ====================================================

// export Member model as anon function, pass in a config call of sequelize and DataTypes
// used by models/index.js to include in list of all Sequelize models
module.exports = function (sequelize, DataTypes) {

  // Model's properties, with validation:
  // ===========================================================
  // define Member as a Sequelize model object
  var Member = sequelize.define("Member", {

    // define data column for Member "nom" (for name of Member)
    // list validation properties of Member.nom
    nom: {
      // STRING is VARCHAR(255)
      type: DataTypes.STRING,
      // must have a value
      allowNull: false,
      // value must be at least 1 char in length
      validate: {
        len: [1]
      }
    }
  });


  // Model's associations:
  // ===========================================================
  // .associate the Member model with another model
  Member.associate = function (models) {

    // the Member model .hasMany (is associated with many) Task models
    Member.hasMany(models.Task, {

      // if the specific Member is deleted, SET its associated Tasks' foreignKey: NULL,
      // rather than "CASCADE", which would delete all Tasks associated with that Member
      // because if that Member moves out, their Tasks still need doing!
      onDelete: "SET NULL"
    });
  };


  // return Member var as the value of the module.exports anon function of member.js
  return Member;
  // table in database will be called "members" plural
};