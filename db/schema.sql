-- ====================================================
-- HomeTeam :: A team-based home chores tracker web app
-- MVC with MySQL, Node, Express, Handlebars, and Sequelize ORM.
-- ©2018 Richard Trevillian
-- University of Richmond (Virginia)
-- Full Stack Developer Bootcamp (July 2018)
-- ====================================================
-- SCHEMA.SQL - MySQL CALLS TO CREATE DATABASE 
-- ====================================================

DROP DATABASE IF EXISTS hometeam_db;
CREATE DATABASE hometeam_db;
-- USE hometeam_db;

-- CREATE TABLE todo
-- (
-- 	id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- 	item varchar(255) NOT NULL,
-- 	done BOOLEAN DEFAULT false
-- );




-- -- HEROKU:
-- USE hx9rdomw5n64340s;

-- CREATE TABLE todo (
-- 	id INT AUTO_INCREMENT NOT NULL ,
-- 	item VARCHAR(255),
-- 	done BOOLEAN DEFAULT false,
-- 	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- 	PRIMARY KEY(id)
-- );