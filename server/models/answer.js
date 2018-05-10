'use strict';
module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define(
    'Answer',
    {
      correct: DataTypes.BOOLEAN,
      keyType: DataTypes.STRING,
      chordRoot: DataTypes.INTEGER,
    },
    { tableName: 'answers' },
  );
  Answer.associate = function(models) {
    Answer.belongsTo(models.User, {
      foreignKey: 'userId',
    });

    Answer.belongsTo(models.Key, {
      foreignKey: 'keyId',
    });

    Answer.belongsTo(models.Chord, {
      foreignKey: 'chordId',
    });
  };
  return Answer;
};
