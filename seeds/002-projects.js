exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Projects").insert([
        { name: "run and slide", description: "run on things and slide" },
        { name: "jump and run", description: "run and jump on stuff" },
        { name: "do things", description: "just some things" }
      ]);
    });
};
//name,desc,finished
