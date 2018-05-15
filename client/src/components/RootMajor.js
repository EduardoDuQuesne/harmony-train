import React, { Component } from 'react';
import RootBar from './RootBar';
import '../css/rootMajor.css';

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
        <h3 className="root-major-subheader">Major Key</h3>
        {this.renderChart()}
      </div>
    );
  }
}
export default RootMajor;