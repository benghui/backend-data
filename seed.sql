CREATE DATABASE IF NOT EXISTS backend_design;

USE backend_design;

DROP TABLE IF EXISTS cafes;

CREATE TABLE cafes (
  id VARCHAR(32) DEFAULT (UUID()) PRIMARY KEY,
  name VARCHAR (100) NOT NULL,
  description VARCHAR (200) NOT NULL,
  employees SMALLINT NOT NULL,
  logo VARCHAR (100) NOT NULL,
  location VARCHAR (50) NOT NULL
);

DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
  id VARCHAR(9) DEFAULT (UUID()) PRIMARY KEY,
  name VARCHAR (100) NOT NULL,
  days_worked SMALLINT NOT NULL,
  cafe VARCHAR (100) NOT NULL
);

INSERT INTO cafes (id, name, description, employees, logo, location) VALUES("e07166a252594723a67b926f7f89a22c", "featherly satisfaction cafe", "A place where you can be satisfied with coffee.", 15, "https://picsum.photos/200", "north");
INSERT INTO cafes (id, name, description, employees, logo, location) VALUES("2b934d78335f4bfeb12ede4e46f44dd9", "brew ha ha espresso bar", "We are passionate about our coffee and we want to share it with you.", 8, "https://picsum.photos/200", "south");
INSERT INTO cafes (id, name, description, employees, logo, location) VALUES("b268f8efecd842c9a345743be637e6a7", "javawocky room", "javawocky is where we sell only high quality products made by small businesses around the world.", 12, "https://picsum.photos/200", "east");
INSERT INTO cafes (id, name, description, employees, logo, location) VALUES("b15595b7714049339f2d0f35bf269f0e", "twinkling question cafe", "the livelyness from within can be felt outside.", 6, "https://picsum.photos/200", "east");
INSERT INTO cafes (id, name, description, employees, logo, location) VALUES("71c84827f7a143839a378732e92c9606", "yours & mine luncheonette", "From the outside it looks cozy, beautiful and snug.", 7, "https://picsum.photos/200", "west");

INSERT INTO employees (id, name, days_worked, cafe) VALUES("UI216b5d1", "Tata", 23, "featherly satisfaction cafe");
INSERT INTO employees (id, name, days_worked, cafe) VALUES("UIf8efecd", "Young", 56, "twinkling question cafe");
INSERT INTO employees (id, name, days_worked, cafe) VALUES("UIf4bfeb1", "Peter", 15, "javawocky room");
INSERT INTO employees (id, name, days_worked, cafe) VALUES("UIa252594", "John", 22, "yours & mine luncheonette");
