'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    totalPrice: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,

  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    // Order.hasMany(models.Product);
    Order.belongsTo(models.User, {
      
      foreignKey: 'userId',
    });
  };
  
  return Order;
};