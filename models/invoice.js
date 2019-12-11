'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    date: DataTypes.STRING,
    total_amount: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Invoice.associate = function(models) {
    // associations can be defined here
    Invoice.belongsToMany(models.Product, {
      through: 'Invoice_Product',
      as: 'products',
      foreignKey: 'InvoiceId',
    })
  };
  return Invoice;
};