const db = require("../data/dbConfig.js");
const { findById } = require("./dogs-module.js");

module.exports = {
  add,
};

async function add(notification) {
  const [id] = await db("notification").insert(notification);
  return findById(id);
}

function findById(id) {
  return db("notifications").where({ id });
}

module.exports = {};
