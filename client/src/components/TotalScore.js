import React, { Component } from 'react';
import TotalPie from './TotalPie';
import '../css/totalScore.css'
class TotalScore extends Component {  
  render() {
    return (
      <div className="total-container">
        <div className="total-header">
          <h3 className="score">Total: {this.props.totalScore}%</h3>
        </div>
        <div className="pie-container">
          <TotalPie className="total-pie" totalScore={this.props.totalScore} />
        </div>
        <div className="score-key-flex">
          <div className="score-key-correct"></div><p> correct</p>
        </div>
        <div className="score-key-flex">
          <div className="score-key-incorrect"></div><p> incorrect</p>
        </div>
      </div>
    );
  }
}
export default TotalScore;