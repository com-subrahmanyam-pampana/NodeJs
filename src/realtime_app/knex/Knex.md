
1.We can start by creating a knexfile.js in the root folder.
2.knexfile.js  act as a configuration for different envs(local or  development or production).

# 
$ knex init

We want to create a knex directory at the root of our project to hold our migrations and seeds scripts. Inside of the knex directory, we need a knex.js file to hold the single instance of the knex module with the correct environment config.

$ mkdir knex
$ mkdir knex/migrations
$ mkdir knex/seeds
$ touch knex/knex.js