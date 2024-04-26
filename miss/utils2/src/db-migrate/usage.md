
# Crate
To create a migration, execute db-migrate create with a title. 
db-migrate create bollywood
node-db-migrate will create a node module within ./migrations/ which contains the following two exports:

exports.up = function (db, callback) {
  callback();
};

exports.down = function (db, callback) {
  callback();
};
