'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    invoice_id: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.Invoice, {
      through: 'Invoice_Product',
      as: 'invoices',
      foreignKey: 'ProductId',
    })
  };
  return Product;
};