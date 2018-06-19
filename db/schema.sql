CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
	id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
	burger_name varchar(75) NOT NULL,
	devoured boolean NOT NULL DEFAULT 0
);