'use strict';
module.exports = (sequelize, DataTypes) => {
  var Chord = sequelize.define(
    'Chord',
    {
      name: DataTypes.STRING,
    },
    { timestamps: false, tableName: 'chords' },
  );
  Chord.associate = function(models) {
    Chord.hasMany(models.Answer, {
      foreignKey: 'chordId',
    });

    Chord.hasMany(models.KeyChord, {
      foreignKey: 'keyId',
    });
  };
  return Chord;
};
