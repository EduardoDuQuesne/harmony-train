'use strict';
module.exports = (sequelize, DataTypes) => {
  var KeyChord = sequelize.define(
    'KeyChord',
    {},
    {
      timestamps: false,
      tableName: 'keys_chords',
    },
  );
  KeyChord.associate = function(models) {
    KeyChord.belongsTo(models.Key, {
      foreignKey: 'keyId',
    });

    KeyChord.belongsTo(models.Chord, {
      foreignKey: 'chordId',
    });
  };
  return KeyChord;
};
