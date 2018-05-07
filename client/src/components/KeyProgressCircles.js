import React, { Component } from 'react';
import { styleScore } from "../helpers.js";
import "../css/keyProgressCircles.css";

class KeyProgressCircles extends Component {
  
  render() {
    const [...chords] = this.props.chords
    return (
      <div className="key-progress-flex">
        {chords.map(chord => {
          return (
            <div className={styleScore(chord.percentage)} key={`Key${this.props.keyName}-${chord.chordName}`}>
              <h4>{!isNaN(chord.percentage) ? `${chord.percentage}%` : "X"}</h4>
              <h4>{chord.chordName}</h4>
              <h4>{chord.total}</h4>
            </div>
          )
        })}
      </div>
    );
  }
}
export default KeyProgressCircles;