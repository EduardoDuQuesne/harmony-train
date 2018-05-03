import React, { Component } from 'react';
import '../css/choiceCircles.css';


class ChoiceCircles extends Component {
  render() {
    return (
        <p 
        name={this.props.chord} 
        draggable
        onDragStart={(e) => {this.props.dragStart(e, e.currentTarget.innerHTML)}}>{this.props.chord}</p>

    );
  }
}

export default ChoiceCircles;