let models = require('./models');
let { keys } = require('./seeders/data/keys.json');
let { chords } = require('./seeders/data/chords.json');
let { keys_chords } = require('./seeders/data/key_chords.json');
console.log('KEYS CHORDS: ', keys);

models.sequelize
  .sync({ force: true })
  .then(() => {
    return models.Key.bulkCreate(keys);
  })
  .then(() => {
    return models.Chord.bulkCreate(chords);
  })
  .then(() => {
    return models.KeyChord.bulkCreate(keys_chords);
  })
  .then(() => {
    process.exit();
  });
