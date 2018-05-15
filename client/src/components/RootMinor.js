import React, { Component } from 'react';
import RootBar from './RootBar';
import '../css/rootMinor.css';

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
        <h3 className="root-minor-subheader">Minor Key</h3>
        {this.renderChart()}
      </div>
    );
  }
}
export default RootMinor;