import Tone from "tone";


//Piano Sample
let piano = new Tone.Players({
  "Abmaj": "../public/audio/Abmaj.mp3",
  "Abmin": "../public/audio/Abmin.mp3",
  "Amaj": "../public/audio/Amaj.mp3",
  "Amin": "../public/audio/Amin.mp3",
  "Aminb5": "../public/audio/Aminb5.mp3",
  "ASminb5": "../public/audio/ASminb5.mp3",
  "Bbmin": "../public/audio/Bbmin.mp3",
  "Bmin": "../public/audio/Bmin.mp3",
  "Bbmaj": "../public/audio/Bbmaj.mp3",
  "Bminb5": "../public/audio/Bminb5.mp3",
  "Bmaj": "../public/audio/Bmaj.mp3",
  "Cbmaj": "../public/audio/Cbmaj.mp3",
  "CSmin": "../public/audio/CSmin.mp3",
  "Cmaj": "../public/audio/Cmaj.mp3",
  "Cmin": "../public/audio/Cmin.mp3",
  "Cminb5": "../public/audio/Cminb5.mp3",
  "CSminb5": "../public/audio/CSminb5.mp3",
  "Dbmaj": "../public/audio/Dbmaj.mp3",
  "Dmin": "../public/audio/Dmin.mp3",
  "Dminb5": "../public/audio/Dminb5.mp3",
  "Dmaj": "../public/audio/Dmaj.mp3",
  "DSmin": "../public/audio/DSmin.mp3",
  "DSminb5": "../public/audio/DSminb5.mp3",
  "Ebmin": "../public/audio/Ebmin.mp3",
  "Ebmaj": "../public/audio/Ebmaj.mp3",
  "Eminb5": "../public/audio/Eminb5.mp3",
  "Emaj": "../public/audio/Emaj.mp3",
  "Emin": "../public/audio/Emin.mp3",
  "Fmaj": "../public/audio/Fmaj.mp3",
  "Fmin": "../public/audio/Fmin.mp3",
  "Fminb5": "../public/audio/Fminb5.mp3",
  "FSmaj": "../public/audio/FSmaj.mp3",
  "FSmin": "../public/audio/FSmin.mp3",
  "FSminb5": "../public/audio/FSminb5.mp3",
  "Gbmaj": "../public/audio/Gbmaj.mp3",
  "Gmaj": "../public/audio/Gmaj.mp3",
  "Gmin": "../public/audio/Gmin.mp3",
  "Gminb5": "../public/audio/Gminb5.mp3",
  "GSmin": "../public/audio/GSmin.mp3",
  "GSminb5": "../public/audio/GSminb5.mp3"
}, {
  "volume": 0,
  "fadeOut": "32n",
}).toMaster();

let chordProgression = [];
const setChordProgression = (progression) => {
  chordProgression = progression;
  console.log('TONE: ', chordProgression );
}

let pianoLoop = new Tone.Sequence((time, col) => { 
  piano.get(chordProgression[col]).start(time, 0, "1n", 0);   
  if(col === 7) stopProgression();  
}, [0, 1, 2, 3, 4, 5, 6, 7], "1n");
pianoLoop.iterations = 1;


const playProgression = () => {
  Tone.Transport.start();
  pianoLoop.start();

}
const stopProgression = () => {
  Tone.Transport.stop();
  pianoLoop.stop();
}

export { setChordProgression, pianoLoop, playProgression, stopProgression }

