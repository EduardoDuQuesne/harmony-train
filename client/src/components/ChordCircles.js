import React, { Component } from 'react';
import '../css/chordCircles.css';

class ChordCircles extends Component {
  render() {
    let isCorrect = this.props.isCorrect;
    let isPlaying = +this.props.bar === +this.props.currentBar && this.props.currentBar !==null;
    let isSubmitted = this.props.submitted;
    console.log('IS SUBMITTED CHORD CIRCLES', isSubmitted );
    return (
      <div className={`circles ${isPlaying ? "play" : ""} 
      answer-${
        isCorrect
          ? 'correct-circle'
          : !isCorrect && typeof isCorrect === 'boolean'
            ? 'incorrect-circle'
            : 'unanswered-circle'
      }`}>
        <p
          className={`answer-${
            isCorrect
              ? 'correct'
              : !isCorrect && typeof isCorrect === 'boolean'
                ? 'incorrect'
                : 'unanswered'
          } text-circles`}
          onDragOver={e => {
            this.props.dragOver(e);
          }}
          onDrop={e => {
            this.props.onDragDrop(e, this.props.index);
          }}
        >
          {!isSubmitted ? `${+this.props.bar + 1}` : `${this.props.chord}` }
        </p>
      </div>
    );
  }
}

export default ChordCircles;
