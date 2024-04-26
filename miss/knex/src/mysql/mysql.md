
# Create a user in mysql
CREATE USER 'dev'@'localhost' IDENTIFIED BY 'iamdev_123';
ALTER USER 'dev'@'localhost' IDENTIFIED WITH mysql_native_password BY 'iamdev_123';
GRANT ALL PRIVILEGES ON * . * TO 'dev'@'localhost';
flush privileges;
# Create movies
CREATE DATABASE testDB;

use  testDB;

CREATE TABLE movies(title VARCHAR(50) NOT NULL,genre VARCHAR(30) NOT NULL,director VARCHAR(60) NOT NULL,release_year INT NOT NULL,PRIMARY KEY(title));


INSERT INTO movies VALUE ("Joker", "psychological thriller", "Todd Phillips", 2019);

SELECT * FROM movies;


# users table:
{ id: 1, name: 'Subbu', email: 'lantunde@test.co.in.test' },
{ id: 2, name: 'Trump', email: 'zo@test.co.in.test' },
{ id: 3, name: 'Samantha', email: 'sam@test.co.in.test' }