"use strict";

module.exports.getKeyId = async (req, res, next) => {
  let { id: userId } = req.app.get("user");
  const { Answer, Key, Chord } = req.app.get("models");
  let {keyName} = req.body;
  let [...answers] = req.body.answers;
  let { id: keyId } = await Key.findOne({where: {name: keyName}, raw: true});
  answers.forEach(({chord: chordName, correct}) => {
    Chord.findOne({where: {name: chordName}, raw: true})
    .then(({id: chordId}) => {
      Answer.create({correct, userId,  keyId, chordId});
      res.status(201).send({message: "Answer stored to database"});
    })
    .catch(err => {
      console.log('Server Answer Create: ', err);
    });
  })
  

}

