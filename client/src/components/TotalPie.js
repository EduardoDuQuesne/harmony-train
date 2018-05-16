import React, { Component } from 'react';
import { VictoryPie } from "victory";
import '../css/totalPie.css'

class TotalPie extends Component {  
  render() {
    const correct = +this.props.totalScore;
    const incorrect = 100 - +this.props.totalScore;
    return (
      <div className="total-pie">
        <VictoryPie
          data={[
            { x: 1, y: correct, label: "" },
            { x: 2, y: incorrect, label: "" }
          ]}
          labels={() => null}
          colorScale={["#D7B377", "#2B4162"]}
          style={{
            labels: {
              fontSize: 35
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