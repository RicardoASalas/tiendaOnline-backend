'use strict';
const fs = require('fs');
const Product = require('../models/Product')

const db = JSON.parse(fs.readFileSync('./musicDB.json', 'utf-8'));

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
   let mapped = db.map(product => ({
    name: product.name,
    brand: product.brand,
    category: product.category,
    price: product.price,
    image: product.image,
    description: product.description,
    stock: Math.floor(Math.random() * (10 - 1) + 1),
    createdAt: new Date,
    updatedAt: new Date
  })
  )
  console.log(mapped);
  
   return queryInterface.bulkInsert('Products', mapped)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return Product.destroy({where: {}})
  }
};
