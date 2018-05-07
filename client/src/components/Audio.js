import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Tone from 'tone'
import { piano } from '../tone';


class Audio extends Component {
  //MOVE TO MAIN COMPONENT
  playProgression = () => {
    Tone.Transport.start();
    this.pianoLoop.start();
  }
  stopProgression = () => {
    Tone.Transport.stop();
    this.pianoLoop.stop();
  }
  //PIANO LOOP
  pianoLoop = new Tone.Sequence((time, col) => { 
    piano.get(this.props.toneProgression[col]).start(time, 0, "1n", 0);   
    if(col === 7) this.stopProgression();  
  }, [0, 1, 2, 3, 4, 5, 6, 7], "1n");

  



  render() {
    return (
      
        <MuiThemeProvider>
          <div>
            <RaisedButton label="&#9658;" onClick={this.playProgression} />
            <RaisedButton label="&#9632;" onClick={this.stopProgression} />
          </div>
        </MuiThemeProvider>
      
    );
  }
}

export default Audio;