'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    totalAmount: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {});
  Invoice.associate = function(models) {
    // associations can be defined here
    Invoice.belongsToMany(models.Product, {
      through: 'Invoice_Product',
      as: 'products',
      foreignKey: 'InvoiceId',
    })
    Invoice.belongsTo(models.User)
  };
  return Invoice;
};