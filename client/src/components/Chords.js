import React, { Component } from 'react';
import ChordCircles from './ChordCircles';
import '../css/chords.css';

class Chords extends Component {
  
  render() {
    let chords = [...this.props.chords];
    return (
      <div>
        <h2>progression</h2>
        <div className="circle-flex">
          {chords.map((chord, i) => {
            return (
              <ChordCircles
                isCorrect={this.props.isCorrect[i]}
                currentBar={this.props.currentBar}
                key={`${chord} + ${i}`}
                dragOver={this.props.dragOver}
                index={i}
                onDragDrop={this.props.onDragDrop}
                bar={`${i}`}
              />
            );
          })}
        </div>
        <h3>current key: {this.props.keyName}</h3>
      </div>
    );
  }
}

export default Chords;
