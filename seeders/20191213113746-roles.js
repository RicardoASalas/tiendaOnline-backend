'use strict';

const Role = require('../models/Role')


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Roles', [{
    roleUser:'superadmin',
    createdAt: new Date,
    updatedAt: new Date
   },
   {
    roleUser:'admin',
    createdAt: new Date,
    updatedAt: new Date
   },
  {
    roleUser:'user',
    createdAt: new Date,
    updatedAt: new Date
  }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return Role.destroy({where: {}})
  }
};
