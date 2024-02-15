npm install mysql

CREATE DATABASE testDB;

use  testDB;

CREATE TABLE movies(title VARCHAR(50) NOT NULL,genre VARCHAR(30) NOT NULL,director VARCHAR(60) NOT NULL,release_year INT NOT NULL,PRIMARY KEY(title));


INSERT INTO movies VALUE ("Joker", "psychological thriller", "Todd Phillips", 2019);

SELECT * FROM movies;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';

flush privileges;