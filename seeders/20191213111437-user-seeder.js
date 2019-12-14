'use strict';
const fs = require('fs');
const User = require('../models/User')

const db = JSON.parse(fs.readFileSync('./db/userDB.json', 'utf-8'));

module.exports = {
  up: (queryInterface, Sequelize) => {
    
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
    
   return User.destroy({where: {}})
  }
};
