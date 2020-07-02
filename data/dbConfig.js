// Q: What is going on here?
// - This code is directing our project to the type of database enviroment we want to use based on the "knexfile.js"
// As of right now the development enviroment is the only thing that is wired, so as of right now everything should rely on our  SQLiteDB enviroment.

const knex = require("knex");
const config = require("../knexfile.js");

const dbEnv = process.env.DB_ENV || "development";

// The module.exports object is where I will define the specific functions that we want to export from the file
// Anything that is defined here will be accessible by any file that imports the module
module.exports = knex(config[dbEnv]);
