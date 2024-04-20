/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, name: 'Subbu', email: 'lantunde@test.co.in.test' },
    { id: 2, name: 'Trump', email: 'zo@test.co.in.test' },
    { id: 3, name: 'Samantha', email: 'sam@test.co.in.test' }
  ]);
};
