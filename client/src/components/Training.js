import React, { Component } from 'react';
import Chords from './Chords';
import Choices from './Choices';

class Training extends Component {
  render() {
    return (
      <div>
        <Chords
          isCorrect={this.props.isCorrect}
          nextQuestion={this.props.nextQuestion}
          chords={this.props.chords}
          keyName={this.props.keyName}
          submitAnswer={this.props.submitAnswer}
          submitted={this.props.submitted}
          onDragDrop={this.props.onDragDrop}
          dragOver={this.props.dragOver}
          toneProgression={this.props.toneProgression}
        />
        
        <Choices
          dragStart={this.props.dragStart}
          chordChoices={this.props.chordChoices}
        />
      </div>
    );
  }
}
export default Training;
