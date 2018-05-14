import React, { Component } from 'react';
import RootBar from './RootBar';

class RootMajor extends Component {  

  renderChart = () => {
    let rootStats = this.props.majorRoot;
    if (rootStats) { 
      return (
        <RootBar root={this.props.majorRoot} numerals={this.props.majNumerals} />
        )
    }
  }

  render() {
    return (
      <div>
        {this.renderChart()}
      </div>
    );
  }
}
export default RootMajor;