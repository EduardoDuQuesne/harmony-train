'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    { tableName: 'users' },
  );
  User.associate = function(models) {
    User.hasMany(models.Answer, {
      foreignKey: 'userId',
    });
  };

  return User;
};
