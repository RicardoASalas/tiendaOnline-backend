'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    roleUser: DataTypes.STRING,
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true,

  }}
  , {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.hasMany(models.User/*,{ 
      foreignKey:'roleId'
    }*/)
     
    
  };
  return Role;
};