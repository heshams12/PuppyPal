CREATE DATABASE puppies_db;
USE puppies_db;

CREATE TABLE puppies
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    breed varchar(255) NOT NULL,
    gender varchar(255) NOT NULL,
    age int(2) NOT NULL,
    info varchar(300),
    location varchar(300),
    image varchar(300) NOT NULL,
	PRIMARY KEY (id)
);