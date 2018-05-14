import React, { Component } from 'react';
import TotalPie from './TotalPie';
import '../css/totalScore.css'
class TotalScore extends Component {  
  render() {
    return (
      <div className="total-container">
        <div>
          <h2>total score</h2>

          <h2 className="score">{this.props.totalScore}%</h2>
        </div>
        <div>
          <TotalPie totalScore={this.props.totalScore} />
        </div>
      </div>
    );
  }
}
export default TotalScore;