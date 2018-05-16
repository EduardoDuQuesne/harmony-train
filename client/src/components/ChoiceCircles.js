import React, { Component } from 'react';
import '../css/choiceCircles.css';

class ChoiceCircles extends Component {
  render() {
    return (
      <p
      className="chord-choice"
        
      >
      <span
      className="chord-choice-span"
        name={this.props.chord}
        draggable
        onDragStart={e => {
          this.props.dragStart(e, e.currentTarget.innerHTML);
        }}
      
      >
        {this.props.chord}
        </span>
      </p>
    );
  }
}

export default ChoiceCircles;
