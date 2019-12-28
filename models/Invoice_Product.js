'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice_Product = sequelize.define('Invoice_Product', {
    ProductId: DataTypes.INTEGER,
    InvoiceId: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER
  }, {});

  
  return Invoice_Product;
};