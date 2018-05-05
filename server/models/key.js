'use strict';
module.exports = (sequelize, DataTypes) => {
  var Key = sequelize.define(
    'Key',
    {
      name: DataTypes.STRING,
    },
    { timestamps: false, tableName: 'keys' },
  );
  Key.associate = function(models) {
    Key.hasMany(models.Answer, {
      foreignKey: 'keyId',
    });

    Key.hasMany(models.KeyChord, {
      foreignKey: 'keyId',
    });
  };

  return Key;
};
