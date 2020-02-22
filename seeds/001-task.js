exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Tasks").insert([
        { description: "do things", notes: " make the things" },
        { description: "some things", notes: " run" },
        { description: "jump on things", notes: " jump" },
        { description: "slide on things", notes: " slide" }
      ]);
    });
};
