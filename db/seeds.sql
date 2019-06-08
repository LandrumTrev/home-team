-- ====================================================
-- HomeTeam :: A team-based home chores tracker web app
-- MVC with MySQL, Node, Express, Handlebars, and Sequelize ORM.
-- ©2018 Richard Trevillian
-- University of Richmond (Virginia)
-- Full Stack Developer Bootcamp (July 2018)
-- ====================================================
-- SEEDS.SQL - SAMPLE DATA TO INSERT IN DATABASE
-- ====================================================

-- DROP DATABASE IF EXISTS hometeam_db;
-- CREATE DATABASE hometeam_db;

-- INSERT INTO tableName (colName) VALUES ('data to insert');

INSERT INTO hometeam_db.Members (memberName, createdAt, updatedAt) VALUES ('Agnetha', NOW(), NOW());
INSERT INTO hometeam_db.Members (memberName, createdAt, updatedAt) VALUES ('Anni-Frid', NOW(), NOW());
INSERT INTO hometeam_db.Members (memberName, createdAt, updatedAt) VALUES ('Benny', NOW(), NOW());
INSERT INTO hometeam_db.Members (memberName, createdAt, updatedAt) VALUES ('Björn', NOW(), NOW());

DELETE FROM hometeam_db.Members WHERE id=1;
DELETE FROM hometeam_db.Members WHERE id=3;

INSERT INTO hometeam_db.Tasks (taskName, createdAt, updatedAt, MemberId) VALUES ('buy 10kg gravlax', NOW(), NOW(), null);
INSERT INTO hometeam_db.Tasks (taskName, createdAt, updatedAt, MemberId) VALUES ('polish teak furniture', NOW(), NOW(), 1);
INSERT INTO hometeam_db.Tasks (taskName, createdAt, updatedAt, MemberId) VALUES ('wax teak floors', NOW(), NOW(), 2);
INSERT INTO hometeam_db.Tasks (taskName, createdAt, updatedAt, MemberId) VALUES ('dust mixing board', NOW(), NOW(), 3);
INSERT INTO hometeam_db.Tasks (taskName, createdAt, updatedAt, MemberId) VALUES ('tune guitars', NOW(), NOW(), 4);
INSERT INTO hometeam_db.Tasks (taskName, createdAt, updatedAt, MemberId) VALUES ('tune piano', NOW(), NOW(), null);
INSERT INTO hometeam_db.Tasks (taskName, createdAt, updatedAt, MemberId) VALUES ('heat sauna', NOW(), NOW(), 1);
INSERT INTO hometeam_db.Tasks (taskName, createdAt, updatedAt, MemberId) VALUES ('go to IKEA', NOW(), NOW(), 2);
INSERT INTO hometeam_db.Tasks (taskName, createdAt, updatedAt, MemberId) VALUES ('make lingonberry jam', NOW(), NOW(), 3);
INSERT INTO hometeam_db.Tasks (taskName, createdAt, updatedAt, MemberId) VALUES ('make blueberry soup', NOW(), NOW(), 4);

DELETE FROM hometeam_db.Tasks WHERE id=1;
DELETE FROM hometeam_db.Tasks WHERE id=5;

UPDATE hometeam_db.Tasks SET MemberId = 2 WHERE taskName = 'polish teak furniture';