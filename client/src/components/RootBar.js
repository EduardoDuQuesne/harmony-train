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
          style={{ data: { fill: "#2B4162" } }}
          alignment="start"
          padding={{ top: 20, bottom: 20 }}
          animate={{
            onEnter: {duration: 1000}
          }}
          data={stats.map((stat, i) => (
            {x: `${numerals[i].num}${numerals[0].type}`, y: !isNaN(stat.percentage) ? +stat.percentage : 0}
          ))}
        />
      </VictoryChart>
    </div>
    );
  }
}
export default RootBar;