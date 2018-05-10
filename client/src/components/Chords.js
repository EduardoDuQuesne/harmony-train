import React, { Component } from 'react';
import ChordCircles from './ChordCircles';
import Audio from './Audio';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/chords.css';

class Chords extends Component {
  
  render() {
    let chords = [...this.props.chords];
    let isSubmitted = this.props.submitted;
    return (
      <div>
        <h2>Chord Progression</h2>
        <h3>Key: {this.props.keyName}</h3>
        <div className="circle-flex">
          {chords.map((chord, i) => {
            return (
              <ChordCircles
                isCorrect={this.props.isCorrect[i]}
                key={`${chord} + ${i}`}
                dragOver={this.props.dragOver}
                index={i}
                onDragDrop={this.props.onDragDrop}
                bar={`${i + 1}`}
              />
            );
          })}
        </div>
        <MuiThemeProvider>
          <div>
            <RaisedButton onClick={this.props.submitAnswer} className={`${isSubmitted ? "hide-btn" : ""}`} label="Submit Answer"  />
            <RaisedButton onClick={this.props.nextQuestion} className={`${!isSubmitted ? "hide-btn" : ""}`} label="Next Question"  />
          </div>
        </MuiThemeProvider>

      
        <Audio toneProgression={this.props.toneProgression} />
      </div>
    );
  }
}

export default Chords;
