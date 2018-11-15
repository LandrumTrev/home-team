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

-- table: tasks (chore, done)
-- table: members (nom)

INSERT INTO tasks (chore) VALUES ('buy 10kg gravlax');
INSERT INTO tasks (chore) VALUES ('polish teak furniture');
INSERT INTO tasks (chore) VALUES ('wax teak floors');
INSERT INTO tasks (chore) VALUES ('dust mixing board');
INSERT INTO tasks (chore) VALUES ('tune guitars');
INSERT INTO tasks (chore) VALUES ('tune piano');
INSERT INTO tasks (chore) VALUES ('heat sauna');
INSERT INTO tasks (chore) VALUES ('go to IKEA');
INSERT INTO tasks (chore) VALUES ('make lingonberry jam');
INSERT INTO tasks (chore) VALUES ('make blueberry soup');

INSERT INTO members (nom) VALUES ('Björn');
INSERT INTO members (nom) VALUES ('Benny');
INSERT INTO members (nom) VALUES ('Agnetha');
INSERT INTO members (nom) VALUES ('Anni-Frid');