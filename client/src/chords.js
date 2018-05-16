/*jshint esversion: 6 */

const Cmaj = ['Cmaj', 'Dmin', 'Emin', 'Fmaj', 'Gmaj', 'Amin', 'Bdim'];
const Amin = ['Amin', 'Bdim', 'Cmaj', 'Dmin', 'Emin', 'Fmaj', 'Gmaj'];
const Dbmaj = ['Dbmaj', 'Ebmin', 'Fmin', 'Gbmaj', 'Abmaj', 'Bbmin', 'Cdim'];
const Bbmin = ['Bbmin', 'Cdim', 'Dbmaj', 'Ebmin', 'Fmin', 'Gbmaj', 'Abmaj'];
const Dmaj = ['Dmaj', 'Emin', 'F#min', 'Gmaj', 'Amaj', 'Bmin', 'C#dim'];
const Bmin = ['Bmin', 'C#dim', 'Dmaj', 'Emin', 'F#min', 'Gmaj', 'Amaj'];
const Ebmaj = ['Ebmaj', 'Fmin', 'Gmin', 'Abmaj', 'Bbmaj', 'Cmin', 'Ddim'];
const Cmin = ['Cmin', 'Ddim', 'Ebmaj', 'Fmin', 'Gmin', 'Abmaj', 'Bbmaj'];
const Emaj = ['Emaj', 'F#min', 'G#min', 'Amaj', 'Bmaj', 'C#min', 'D#dim'];
const CSmin = ['C#min', 'D#dim', 'Emaj', 'F#min', 'G#min', 'Amaj', 'Bmaj'];
const Fmaj = ['Fmaj', 'Gmin', 'Amin', 'Bbmaj', 'Cmaj', 'Dmin', 'Edim'];
const Dmin = ['Dmin', 'Edim', 'Fmaj', 'Gmin', 'Amin', 'Bbmaj', 'Cmaj'];
const Gbmaj = ['Gbmaj', 'Abmin', 'Bbmin', 'Cbmaj', 'Dbmaj', 'Ebmin', 'Fdim'];
const Ebmin = ['Ebmin', 'Fdim', 'Gbmaj', 'Abmin', 'Bbmin', 'Cbmaj', 'Dbmaj'];
const Gmaj = ['Gmaj', 'Amin', 'Bmin', 'Cmaj', 'Dmaj', 'Emin', 'F#dim'];
const Emin = ['Emin', 'F#dim', 'Gmaj', 'Amin', 'Bmin', 'Cmaj', 'Dmaj'];
const Abmaj = ['Abmaj', 'Bbmin', 'Cmin', 'Dbmaj', 'Ebmaj', 'Fmin', 'Gdim'];
const Fmin = ['Fmin', 'Gdim', 'Abmaj', 'Bbmin', 'Cmin', 'Dbmaj', 'Ebmaj'];
const Amaj = ['Amaj', 'Bmin', 'C#min', 'Dmaj', 'Emaj', 'F#min', 'G#dim'];
const FSmin = ['F#min', 'G#dim', 'Amaj', 'Bmin', 'C#min', 'Dmaj', 'Emaj'];
const Bbmaj = ['Bbmaj', 'Cmin', 'Dmin', 'Ebmaj', 'Fmaj', 'Gmin', 'Adim'];
const Gmin = ['Gmin', 'Adim', 'Bbmaj', 'Cmin', 'Dmin', 'Ebmaj', 'Fmaj'];
const Bmaj = ['Bmaj', 'C#min', 'D#min', 'Emaj', 'F#maj', 'G#min', 'A#dim'];
const GSmin = ['G#min', 'A#dim', 'Bmaj', 'C#min', 'D#min', 'Emaj', 'F#maj'];

const keys = [
  Cmaj,
  Amin,
  Dbmaj,
  Bbmin,
  Dmaj,
  Bmin,
  Ebmaj,
  Cmin,
  Emaj,
  CSmin,
  Fmaj,
  Dmin,
  Gbmaj,
  Ebmin,
  Gmaj,
  Emin,
  Abmaj,
  Fmin,
  Amaj,
  FSmin,
  Bbmaj,
  Gmin,
  Bmaj,
  GSmin,
];

let majNumerals = [
  {num: "I", type: "maj"}, 
  {num: "ii", type: "min"}, 
  {num: "iii", type: "min"}, 
  {num: "IV", type: "maj"}, 
  {num: "V", type: "maj"}, 
  {num: "vi", type: "min"}, 
  {num: "vii", type: "dim"}
];
let minNumerals = [
  {num: "i", type: "min"}, 
  {num: "ii", type: "dim"},
  {num: "III", type: "maj"}, 
  {num: "iv", type: "min"}, 
  {num: "v", type: "min"}, 
  {num: "VI", type: "maj"}, 
  {num: "VII", type: "maj"} 
];

module.exports = { keys, majNumerals, minNumerals };
