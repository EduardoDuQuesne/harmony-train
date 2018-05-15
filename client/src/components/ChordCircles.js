import React, { Component } from 'react';
import '../css/chordCircles.css';

class ChordCircles extends Component {
  render() {
    let isCorrect = this.props.isCorrect;
    let isPlaying = +this.props.bar === +this.props.currentBar && this.props.currentBar !==null;
    return (
      <div className={`circles ${isPlaying ? "play" : ""}`}>
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
          {' '}
          {+this.props.bar + 1}
        </p>
      </div>
    );
  }
}

export default ChordCircles;
