import React, { Component } from 'react';
import ChordCircles from './ChordCircles';
import { playProgression, stopProgression } from '../tone';
import '../css/chords.css';

class Chords extends Component {
  //MOVE TO MAIN COMPONENT
  play = () => {
    playProgression();
  }
  stop = () => {
    stopProgression();
  }

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
        <button onClick={this.props.submitAnswer} hidden={isSubmitted}>
          Submit Answer
        </button>
        <button onClick={this.props.nextQuestion} hidden={!isSubmitted}>
          Next Question
        </button>
        <button name="play" onClick={this.play} >&#9658;</button>
        <button name="stop" onClick={this.stop}>&#9632;</button>
      </div>
    );
  }
}

export default Chords;
