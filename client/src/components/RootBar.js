import React, { Component } from 'react';
import { VictoryChart, VictoryBar } from "victory";
import '../css/rootBar.css'

class RootBar extends Component {  
  

  render() {
    const numerals = this.props.numerals;
    const stats = this.props.root;
    return (
    <div className="root-chart">
       <VictoryChart>
        <VictoryBar
          domain={{ y: [0, 100]}}
          alignment="start"
          padding={{ top: 20, bottom: 20 }}
          animate={{
            onEnter: {duration: 1000}
          }}
          data={[
            {x: `${numerals[0].num}${numerals[0].type}`, y: +stats[0].percentage},
            {x: `${numerals[1].num}${numerals[1].type}`, y: +stats[1].percentage}, 
            {x: `${numerals[2].num}${numerals[2].type}`, y: +stats[2].percentage}, 
            {x: `${numerals[3].num}${numerals[3].type}`, y: +stats[3].percentage}, 
            {x: `${numerals[4].num}${numerals[4].type}`, y: +stats[4].percentage}, 
            {x: `${numerals[5].num}${numerals[5].type}`, y: +stats[5].percentage},
            {x: `${numerals[6].num}${numerals[6].type}`, y: +stats[6].percentage} 
          ]}
        />
      </VictoryChart>
    </div>
    );
  }
}
export default RootBar;