import React, { Component } from 'react';
import { VictoryPie } from "victory";
import '../css/totalPie.css'


class TotalPie extends Component {  
  render() {
    const correct = this.props.totalScore;
    const incorrect = 100 - this.props.totalScore;
    return (
      <div className="total-pie">
        <VictoryPie
          data={[
            { x: "Correct", y: correct },
            { x: "Incorrect", y: incorrect }
          ]}
          colorScale={["green", "red"]}
          style={{
            labels: {
              fontSize: 25
            }
          }}
          labelRadius={170}
          animate={{
            onEnter: {duration: 1000}
          }}
        />
      </div>    
    );
  }
}
export default TotalPie;