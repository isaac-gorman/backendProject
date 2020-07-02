// The db variable is storing my connection to the database
// I have not created this file but the "dbConfig" file but the connection will be stored in it.
const db = require("../data/dbConfig.js");

const Kennels = require("./kennels-module.js");
const Dogs = require("./dogs-module.js");

module.exports = {
  findById,
};

async function findById(filter) {
  const id = Number(filter);
  const [admin] = await db("admins").where({ id });
  const [kennel] = await db("kennels").where({ id: admin.kennel_id });
  const dogs = await Dogs.findByKennel(kennel.id);
  return { ...admin, ...kennel, dogs };
}

module.exports = {};
