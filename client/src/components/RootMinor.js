import React, { Component } from 'react';
import RootBar from './RootBar';

class RootMinor extends Component {  

  renderChart = () => {
    let rootStats = this.props.minorRoot;
    if (rootStats) { 
      return (
        <RootBar root={this.props.minorRoot} numerals={this.props.minNumerals} />
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
export default RootMinor;