'use strict';

const Role = require('../models/Role')


module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('Roles', [{
    roleUser:'superadmin',
    id: 1,
    createdAt: new Date,
    updatedAt: new Date
   },
   {
    roleUser:'admin',
    id: 2,
    createdAt: new Date,
    updatedAt: new Date
   },
  {
    roleUser:'user',
    id: 3,
    createdAt: new Date,
    updatedAt: new Date
  }])
  },

  down: (queryInterface, Sequelize) => {
  
   return Role.destroy({where: {}})
  }
};
