'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creditcardNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creditcardType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Invoice);
    User.belongsTo(models.Role,{
      foreignKey: {
        allowNull:false,
        onDelete: 'CASCADE',
        defaultValue:3
      }
    })
    // associations can be defined here
  };


  return User;
  // User.hasOne()
};