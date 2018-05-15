import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/audio.css'


class Audio extends Component {
  render() {
    const isPlaying = this.props.playing;
    return (
        <MuiThemeProvider>
          <div className="audio-btn-div">
            <RaisedButton className={`play-btn ${isPlaying ? "hide-btn" : ""}`} label="Play" onClick={this.props.playProgression} />
            <RaisedButton className={`stop-btn ${!isPlaying ? "hide-btn" : ""}`} label="Stop" onClick={this.props.stopProgression} />
          </div>
        </MuiThemeProvider>
    );
  }
}

export default Audio;