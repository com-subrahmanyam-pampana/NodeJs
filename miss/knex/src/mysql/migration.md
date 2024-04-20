
Migration allows you to easily modify a database schema. Inside each migration, you'll have 2 functions: up is executed when the migration runs, whereas down is executed the migration is rolled back. 
This means when you don't need the changes that were done by the migration anymore.

# Migration command
knex migrate:make create_users_table

This will create a migration file inside a new directory  called "migrations". 
If you open it, you'll see that there are already up and down functions.
Note :Users tabei not created in the DB yet

Modifhe gration ile nd d tabe propertie 

# Migrate 
knex migrate:latest --knexfile ./knexfile.js
 Knex's CLI command migrate:latest to migrate the latest migrations that have not been migrated yet. The option --knexfile specifies the location of the knexfile.
 
This will create a table in the DB
