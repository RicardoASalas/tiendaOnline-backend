'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice_Product = sequelize.define('Invoice_Product', {
    ProductId: DataTypes.INTEGER,
    InvoiceId: DataTypes.INTEGER
  }, {});
/*   Invoice_Product.associate = function(models) {
    // associations can be defined here
  }; */
  return Invoice_Product;
};