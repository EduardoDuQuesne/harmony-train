import React, { Component } from 'react';
import Audio from './Audio';
import SelectTempo from './SelectTempo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/submitAnswers.css';

class SubmitAnswers extends Component {
  
  
  render() {
    let isSubmitted = this.props.submitted;
    return (
        <div className="control-btns">
          <MuiThemeProvider >
            <div className="submit-answers">
              <RaisedButton onClick={this.props.submitAnswer} className={`${isSubmitted ? "hide-btn" : ""}`} label="Submit"  />
              <RaisedButton onClick={this.props.nextQuestion} className={`${!isSubmitted ? "hide-btn" : ""}`} label="Next"  />
            </div>
          </MuiThemeProvider>
          <Audio
            toneProgression={this.props.toneProgression}
            playProgression={this.props.playProgression}
            stopProgression={this.props.stopProgression}
            playing={this.props.playing}
          />  
          <div>      
            <SelectTempo        
              changeTempo={this.props.changeTempo}
              />
          </div>
        </div>
      
    );
  }
}

export default SubmitAnswers;