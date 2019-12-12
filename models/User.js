'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    usertName:{
       type: DataTypes.STRING,
       unique: true,
       allowNull:false
      },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    country:{
      type: DataTypes.STRING,
      allowNull: false  
    },
    credictardNumber: DataTypes.INTEGER,

    credicardType: DataTypes.STRING,

    token: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Invoice);
    // associations can be defined here
  };
  
  
  return User;
  // User.hasOne()
};