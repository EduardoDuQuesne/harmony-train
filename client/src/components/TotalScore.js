import React, { Component } from 'react';

class TotalScore extends Component {  
  render() {
    console.log("total score",this.props.totalScore);
    return (
      <div>
        <h2>{this.props.totalScore}%</h2>
        <h2>Total Score</h2>
      </div>
    );
  }
}
export default TotalScore;