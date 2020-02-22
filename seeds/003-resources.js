exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Resources").insert([
        { name: "shoes", description: "for running", project_id: 1 },
        { name: "shoes", description: "for running", project_id: 2 },
        { name: "skates", description: "for slideing", project_id: 1 },
        { name: "fun thing", description: "for stuffs", project_id: 3 }
      ]);
    });
};
//name.desc.proj_id
