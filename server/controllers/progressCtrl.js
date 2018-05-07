"use strict";

module.exports.getProgress = async (req, res, next) => {
  let { Chord, Key, Answer, KeyChord } = req.app.get('models');
  let {id: userId } = req.app.get('user');
  if (userId) {
    let keys = await Key.findAll({
      raw: true, 
    });
    //GIANT PROGRESS ARRAY
    let progressArray = [];
    //LOOP THROUGH KEYS
    for (let i = 0; i < keys.length; i++) {
      let chordObj = {
        keyName: `${keys[i].name}`,
        progress: []
      }
      console.log('KEYS:', keys[i].name, keys[i].id );
      //EACH LOOP GETS CHORDS IN KEY
      let chords = await KeyChord.findAll({
            raw: true,
            include: [{model: Chord, attributes: ["name", "id"]}],
            where: {keyId: keys[i].id},
            order: [
              ['id', 'ASC']
            ]
          });
          //LOOP AND GET STATS ON EACH CHORD IN CURRENT KEY
          for (let j = 0; j < 7; j++) {
            console.log('CHORD LOOP: ', chords[j] );
            let correct = await Answer.findAndCount({
              raw: true,
              where: {keyId: keys[i].id, chordId: chords[j].chordId, correct: true}
            });
    
            let incorrect = await Answer.findAndCount({
              raw: true,
              where: {userId: userId, keyId: keys[i].id, chordId: chords[j].chordId, correct: false}
            });
            let total = correct.count + incorrect.count;
            let chordStats = {
              chordName: chords[j]['Chord.name'],
              percentage: ((correct.count / total) * 100).toFixed(0),
              correct: correct.count,
              incorrect: incorrect.count,
              total
            };
            chordObj.progress.push(chordStats)
          }      
          progressArray.push(chordObj);
    }
    res.status(200).json(progressArray);
  }
}