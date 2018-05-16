import React, { Component } from 'react';
import ChoiceCircles from './ChoiceCircles';
import '../css/choices.css';

class Choices extends Component {
  render() {
    let chordChoices = this.props.chordChoices;
    return (
      <div className="choice-container">
        <h2 className="choice-header">choices</h2>
        <div className="choice-flex">
          {chordChoices.map(chord => (
            <ChoiceCircles
              dragStart={this.props.dragStart}
              key={chord}
              chord={chord}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Choices;
