"use strict";

module.exports.storeAnswers = async (req, res, next) => {
  let { id: userId } = req.app.get("user");
  const { Answer, Key, Chord } = req.app.get("models");
  let {keyName} = req.body;
  let [...answers] = req.body.answers;
  let { id: keyId, type: keyType } = await Key.findOne({where: {name: keyName}, raw: true});
  answers.forEach(({chord: chordName, correct, chordRoot}) => {
    Chord.findOne({where: {name: chordName}, raw: true})
    .then(({id: chordId}) => {
      Answer.create({correct, userId,  keyId, chordId, chordRoot, keyType});
    })
    .catch(err => {
      console.log(err);
    });
  })
  res.status(201).send({message: "Answer stored to database"});
}

