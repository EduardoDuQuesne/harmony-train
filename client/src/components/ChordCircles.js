import React, { Component } from 'react';
import '../css/chordCircles.css';

class ChordCircles extends Component {
  render() {
    let isCorrect = this.props.isCorrect;
    return (
      <div className="circles">
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
          {this.props.bar}
        </p>
      </div>
    );
  }
}

export default ChordCircles;
