/*jshint esversion: 6 */

module.exports.randomChord = () => {
  return Math.floor(Math.random() * 7);
};

module.exports.randomKey = () => {
  return Math.floor(Math.random() * 23);
};

module.exports.styleScore = (score) => {
  if (score > 80) {
    return "score-green";
  } else if (score < 80) {
    return "score-red";
  }
}
