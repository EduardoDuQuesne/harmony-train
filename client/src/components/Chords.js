import React, { Component } from 'react';
import ChordCircles from './ChordCircles';
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
        <button onClick={this.props.submitAnswer} hidden={isSubmitted}>
          Submit Answer
        </button>
        <button onClick={this.props.nextQuestion} hidden={!isSubmitted}>
          Next Question
        </button>
        <button>&#9658;</button>
        <button>&#9632;</button>
      </div>
    );
  }
}

export default Chords;
