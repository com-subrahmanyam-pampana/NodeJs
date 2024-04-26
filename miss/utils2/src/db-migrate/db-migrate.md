# Usage
npm install -g db-migrate

Usage: db-migrate [up|down|reset|create|db] [[dbname/]migrationName|all] [options]

Down migrations are run in reverse run order, so migrationName is ignored for down migrations.
Use the --count option to control how many down migrations are run (default is 1).

Options:
  --env, -e                   The environment to run the migrations under.    [default: "dev"]
  --migrations-dir, -m        The directory containing your migration files.  [default: "./migrations"]
  --count, -c                 Max number of migrations to run.
  --dry-run                   Prints the SQL but doesn't run it.              [boolean]
  --verbose, -v               Verbose mode.                                   [default: false]
  --config                    Location of the database.json file.             [default: "./database.json"]
  --force-exit                Call system.exit() after migration run          [default: false]
  --sql-file                  Create sql files for up and down.               [default: false]
  --coffee-file               Create a coffeescript migration file            [default: false]
  --migration-table           Set the name of the migration table.
  --table, --migration-table                                                  [default: "migrations"]

# Config

db-migrate supports the concept of environments. 
For example, you might have a dev, test, and prod environment where you need to run the migrations at different times. 
Environment settings are loaded from a database.json

# Commands
db-migrate up -c 5
This will execute 5 migrations

db-migrate up 20150207135259-myFancyMigration
To migrate a single one(We are specifying the name)

db-migrate down -c 5

If you want to let db-migrate execute all down migrations you can also call:

db-migrate reset

# Create a migration
db-migrate create migrationname

Creates a default migration with the name migrationname in your configured migrations directory.

# Create a migration
db-migrate create anothermigration --coffee-file



Creates a coffee script migration with the name anothermigration in your configured migrations directory.