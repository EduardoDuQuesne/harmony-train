import React, { Component } from 'react';
import { VictoryChart, VictoryBar } from "victory";
import '../css/keyBar.css'

class KeyBar extends Component {  
  

  render() {
    const chords = this.props.chords;
    return (
    <div className="key-chart">
       <VictoryChart>
        <VictoryBar
          domain={{ y: [0, 100]}}
          alignment="start"
          data={chords.map(chord => (
            {x: `${chord.chordName}`, y: +`${!isNaN(chord.percentage) ? chord.percentage : 0}`}
          ))}
        />
      </VictoryChart>
    </div>
    );
  }
}
export default KeyBar;