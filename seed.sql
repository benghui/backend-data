CREATE DATABASE IF NOT EXISTS backend_design;

USE backend_design;

DROP TABLE IF EXISTS cafes;

CREATE TABLE cafes (
  id VARCHAR(36) DEFAULT (UUID()) PRIMARY KEY,
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

INSERT INTO cafes (id, name, description, employees, logo, location) VALUES("91a744e7-1f92-46db-acc7-1c17e8430d64", "featherly satisfaction cafe", "a place where you can be satisfied with coffee.", 15, "https://picsum.photos/200", "north");
INSERT INTO cafes (id, name, description, employees, logo, location) VALUES("9c3465ed-a89d-46af-9dea-948ac2419cfb", "brew ha ha espresso bar", "we are passionate about our coffee and we want to share it with you.", 8, "https://picsum.photos/200", "south");
INSERT INTO cafes (id, name, description, employees, logo, location) VALUES("b921af00-e304-4bff-8201-340dae516b62", "javawocky room", "javawocky is where we sell only high quality products made by small businesses around the world.", 12, "https://picsum.photos/200", "east");
INSERT INTO cafes (id, name, description, employees, logo, location) VALUES("6a16a399-13f1-48af-9ef8-8aa86276f2df", "twinkling question cafe", "the livelyness from within can be felt outside.", 6, "https://picsum.photos/200", "east");
INSERT INTO cafes (id, name, description, employees, logo, location) VALUES("cf60fa8d-e10d-42d8-ac7e-102f47833dd3", "yours & mine luncheonette", "from the outside it looks cozy, beautiful and snug.", 7, "https://picsum.photos/200", "west");

INSERT INTO employees (id, name, days_worked, cafe) VALUES("UI216b5d1", "tata", 23, "featherly satisfaction cafe");
INSERT INTO employees (id, name, days_worked, cafe) VALUES("UIf8efecd", "young", 56, "twinkling question cafe");
INSERT INTO employees (id, name, days_worked, cafe) VALUES("UIf4bfeb1", "peter", 15, "javawocky room");
INSERT INTO employees (id, name, days_worked, cafe) VALUES("UIa252594", "john", 22, "yours & mine luncheonette");
