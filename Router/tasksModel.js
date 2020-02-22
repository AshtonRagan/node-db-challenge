const db = require("../data/db.config");

module.exports = {
  getall,
  add
};

function getall() {
  return db("Tasks");
}

function add(body) {
  return db("Tasks").insert(body);
}
