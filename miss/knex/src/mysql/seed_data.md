A Seed file allows you to add data into your database without having to manually add them. 

To create a seed file, run the following command:

# Create a seed file
knex seed:make users --knexfile ./knexfile.js
This will create the seed file users.js inside ./seeds. 
The option --knexfile specifies the location of the knexfile.

Now open users.js file insode the seeds folder and update your data

# Seed
knex seed:run --knexfile ./knexfile.js