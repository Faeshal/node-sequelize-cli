"use strict";

const faker = require("faker");
const fakerData = [];
for (let i = 0; i < 100; i++) {
  const country = {
    countryName: faker.address.country(),
    capital: faker.address.city(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  fakerData.push(country);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Countries", fakerData, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Countries", null, {});
  },
};
