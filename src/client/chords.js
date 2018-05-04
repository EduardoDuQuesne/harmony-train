/*jshint esversion: 6 */

const Cmaj = ["Cmaj", "Dmin", "Emin", "Fmaj", "Gmaj", "Amin", "Bminb5"];
const Amin = ["Aminb5", "Bmin", "Cmaj", "Dmin", "Emin", "Fmaj", "Gmaj"];      
const Dbmaj = ["Dbmaj", "Ebmin", "Fmin", "Gbmaj", "Abmaj", "Bbmin", "Cminb5"];      
const Bbmin = ["Bbmin", "Cminb5", "Dbmaj", "Ebmin", "Fmin", "Gbmaj", "Abmaj"];      
const Dmaj = ["Dmaj", "Emin", "F#min", "Gmaj", "Amaj", "Bmin", "C#minb5"];
const Bmin = ["Bmin", "C#min", "Dmaj", "Emin", "F#min", "Gmaj", "Amaj"];
const Ebmaj = ["Ebmaj", "Fmin", "Gmin", "Abmaj", "Bbmaj", "Cmin", "Dminb5"];
const Cmin = ["Cmin", "Dminb5", "Ebmaj", "Fmin", "Gmin", "Abmaj", "Bbmaj"];
const Emaj = ["Emaj", "F#min", "G#min", "Amaj", "Bmaj", "C#min", "D#minb5"];
const CSmin = ["C#min", "D#minb5", "Emaj", "F#min", "G#min", "Amaj", "Bmaj"];
const Fmaj = ["Fmaj", "Gmin", "Amin", "Bbmaj", "Cmaj", "Dmin", "Eminb5"];
const Dmin = ["Dmin", "Eminb5", "Fmaj", "Gmin", "Amin", "Bbmaj", "Cmaj"];
const Gbmaj = ["Gbmaj", "Abmin", "Bbmin", "Cbmaj", "Dbmaj", "Ebmin", "Fminb5"];
const Ebmin = ["Ebmin", "Fminb5", "Gbmaj", "Abmin", "Bbmin", "Cbmaj", "Dbmaj"];
const Gmaj = ["Gmaj", "Amin", "Bmin", "Cmaj", "Dmaj", "Emin", "F#minb5"];
const Emin = ["Emin", "F#minb5","Gmaj", "Amin", "Bmin", "Cmaj", "Dmaj"];
const Abmaj = ["Abmaj", "Bbmin", "Cmin", "Dbmaj", "Ebmaj", "Fmin", "Gminb5"];
const Fmin = ["Fmin", "Gminb5", "Abmaj", "Bbmin", "Cmin", "Dbmaj", "Ebmaj"];
const Amaj = ["Amaj", "Bmin", "C#min", "Dmaj", "Emaj", "F#min", "G#minb5"];
const FSmin = ["F#min", "G#minb5", "Amaj", "Bmin", "C#min", "Dmaj", "Emaj"];
const Bbmaj = ["Bbmaj", "Cmin", "Dmin", "Ebmaj", "Fmaj", "Gmin", "Aminb5"];
const Gmin = [ "Gmin", "Aminb5", "Bbmaj", "Cmin", "Dmin", "Ebmaj", "Fmaj"];
const Bmaj = ["Bmaj", "C#min", "D#min", "Emaj", "F#maj", "G#min", "A#minb5"];
const GSmin = ["G#min", "A#minb5", "Bmaj", "C#min", "D#min", "Emaj", "F#maj"];

const keys = [Cmaj, Amin, Dbmaj, Bbmin, Dmaj, Bmin, Ebmaj, Cmin, Emaj, CSmin, Fmaj, Dmin, Gbmaj, Ebmin, Gmaj, Emin, Abmaj, Fmin, Amaj, FSmin, Bbmaj, Gmin, Bmaj, GSmin];
module.exports = keys;