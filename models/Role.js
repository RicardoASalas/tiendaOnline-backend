'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    roleUser: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.hasMany(models.User)
  };
  return Role;
};