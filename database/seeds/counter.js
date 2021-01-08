exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('counter').del()
    .then(function () {
      // Inserts seed entries
      return knex('counter').insert([
        {id: 1, count: 25883}
      ]);
    });
};