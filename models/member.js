// ====================================================
// HomeTeam :: A team-based home chores tracker web app
// MVC with MySQL, Node, Express, Handlebars, and Sequelize ORM.
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// member.js - Model for a team member
// ====================================================

module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    memberName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Member.associate = function(models) {
    Member.hasMany(models.Task, {
      onDelete: "SET NULL"
    });
  };

  return Member;
};
