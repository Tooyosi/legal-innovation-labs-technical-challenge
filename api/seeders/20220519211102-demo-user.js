'use strict';

const { bin2hashData } = require("../helpers");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('users', [{
      firstName: "Admin",
      lastName: "",
      email: "admin@blog.com",
      password: bin2hashData("password", process.env.PASSWORD_HASH),
      isAdmin: false,
      blocked: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
