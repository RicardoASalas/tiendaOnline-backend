'use strict';
const fs = require('fs');
const User = require('../models/User')

const db = JSON.parse(fs.readFileSync('./db/userDb.json', 'utf-8'));

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
   let mapped = db.map(user => ({
    userName: user.userName,
    password: user.password,
    address: user.address,
    email: user.email,
    country: user.country,
    creditcardNumber: user.creditcardNumber,
    creditcardType: user.creditcardType,
    token: null,
    createdAt: new Date,
    updatedAt: new Date
  })
  )
  console.log(mapped);
  
   return queryInterface.bulkInsert('Users', mapped)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return User.destroy({where: {}})
  }
};
