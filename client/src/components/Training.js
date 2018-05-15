import React, { Component } from 'react';
import Chords from './Chords';
import Choices from './Choices';
import SubmitAnswers from './SubmitAnswers';
import '../css/training.css';

class Training extends Component {
  render() {
    return (
      <div>
          <div className="train-container">
            <div className="train-one train-items">
              <div>
                <Chords
                  isCorrect={this.props.isCorrect}
                  chords={this.props.chords}
                  keyName={this.props.keyName}
                  onDragDrop={this.props.onDragDrop}
                  dragOver={this.props.dragOver}
                  toneProgression={this.props.toneProgression}
                />
              </div>
              <div>
                <SubmitAnswers
                  nextQuestion={this.props.nextQuestion}
                  submitAnswer={this.props.submitAnswer}
                  submitted={this.props.submitted}
                  toneProgression={this.props.toneProgression}
                  playing={this.props.playing}
                  playProgression={this.props.playProgression}
                  stopProgression={this.props.stopProgression}
                  changeTempo={this.props.changeTempo}

                />
              </div>
            </div>
            <div className="train-two train-items">
                <Choices
                  dragStart={this.props.dragStart}
                  chordChoices={this.props.chordChoices}
              />
            </div>
          </div>
      </div>
    );
  }
}
export default Training;
