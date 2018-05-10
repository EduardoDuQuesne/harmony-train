"use strict";


//GET PROGRESS FOR EACH KEY
module.exports.getProgressByKey = async (req, res, next) => {
  let { Chord, Key, Answer, KeyChord } = req.app.get('models');
  let {id: userId } = req.app.get('user');
  let keyTotal = 0;
  if (userId) {
    let keys = await Key.findAll({
      raw: true,
      logging: false, 
      where: {type: req.params.type}
    });
    //GIANT PROGRESS ARRAY
    let statsArray = [];
    //LOOP THROUGH KEYS
    for (let i = 0; i < keys.length; i++) {
      keyTotal = 0;
      let chordObj = {
        keyName: `${keys[i].name}`,
        progress: []
      }
      //EACH LOOP GETS CHORDS IN KEY
      let chords = await KeyChord.findAll({
            raw: true,
            logging: false,
            include: [{model: Chord, attributes: ["name", "id"]}],
            where: {keyId: keys[i].id},
            order: [
              ['id', 'ASC']
            ]
          });
          //LOOP AND GET STATS ON EACH CHORD IN CURRENT KEY
          for (let j = 0; j < 7; j++) {
            let {count: correct} = await Answer.findAndCount({
              raw: true,
              where: {userId, keyId: keys[i].id, chordId: chords[j].chordId, correct: true},
              logging: false
            });
            let {count: incorrect} = await Answer.findAndCount({
              raw: true,
              logging: false,
              where: {userId, keyId: keys[i].id, chordId: chords[j].chordId, correct: false}
            });
            let total = correct + incorrect;
            keyTotal = await keyTotal + total;
            let chordStats = {
              chordName: chords[j]['Chord.name'],
              percentage: ((correct / total) * 100).toFixed(0),
              correct: correct,
              incorrect: incorrect,
              total
            };
            chordObj.progress.push(chordStats)
          }
          statsArray.push(chordObj);         
    }
    res.status(200).json(statsArray);
  }
}

module.exports.getProgressByRoot =  async (req, res, next) => {
  let { Answer } = req.app.get('models');
  let {id: userId } = req.app.get('user');
  let { keyType } = req.params;
  let statsArray = [];
  //LOOP THROUGH EACH CHORD POSITION
  for (let i = 1; i < 8; i++) {
    let {count: correct} = await Answer.findAndCount({
      raw: true,
      logging: false,
      where: {userId, correct: true, keyType, chordRoot: i, userId}
    });
    let {count: incorrect} = await Answer.findAndCount({
      raw: true,
      logging: false,
      where: {userId, correct: false, keyType, chordRoot: i, userId}
    });
    let total = correct + incorrect;
    let statObj = {chordRoot: i, percentage: ((correct / total) * 100).toFixed(0) }
    statsArray.push(statObj);
  } 
  res.status(200).json(statsArray);
}

module.exports.getTotalScore = async (req, res) => {
  let { Answer } = req.app.get('models');
  let {id: userId } = req.app.get('user');
  if (userId) {
    //GET TOTAL CORRECT RESPONSES FOR USER
    let {count: correct} = await Answer.findAndCount({
      raw: true,
      where: {userId, correct: true},
      logging: false
    });
    //GET TOTAL INCORRECT RESPONSES FOR USER
    let {count: incorrect} = await Answer.findAndCount({
      raw: true,
      logging: false,
      where: {userId, correct: false}
    });
    //CALCULATE PERCENTAGE
    let total = correct + incorrect;
    let score = ((correct / total) * 100).toFixed(0);
    res.status(200).json({score});
  }
}
