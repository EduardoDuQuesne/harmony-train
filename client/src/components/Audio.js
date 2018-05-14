import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Tone from 'tone'
import { piano } from '../tone';
import '../css/audio.css'


class Audio extends Component {
  //MOVE TO MAIN COMPONENT
  playProgression = () => {
    Tone.Transport.start();
    this.pianoLoop.start();
    this.props.setStatePlay();
  }
  stopProgression = () => {
    Tone.Transport.stop();
    this.pianoLoop.stop();
    this.props.setStateStop();
  }
  //PIANO LOOP
  pianoLoop = new Tone.Sequence((time, col) => { 
    piano.get(this.props.toneProgression[col]).start(time, 0, "1n", 0);   
    if(col === 7) { 
      this.stopProgression();  
      this.props.setStateStop();
    }  
  }, [0, 1, 2, 3, 4, 5, 6, 7], "1n");

  



  render() {
    const isPlaying = this.props.playing;
    return (
        <MuiThemeProvider>
          <div>
            <RaisedButton className={`play-btn ${isPlaying ? "hide-btn" : ""}`} label="Play" onClick={this.playProgression} />
            <RaisedButton className={`stop-btn ${!isPlaying ? "hide-btn" : ""}`} label="Stop" onClick={this.stopProgression} />
          </div>
        </MuiThemeProvider>
      
    );
  }
}

export default Audio;