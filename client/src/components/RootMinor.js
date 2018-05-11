import React, { Component } from 'react';

class RootMinor extends Component {  

  renderProgress = (num, i) => {
    let rootStats = this.props.minorRoot;
    if (rootStats) { 
      return (
        <div key={num.num}>
          <h4>{rootStats[i].percentage}</h4>
          <h2 key={num.num}>{num.num}<span className="sup-script">{num.type}</span></h2>
        </div>
        )
    }
  }

  render() {
    let minNumerals = this.props.minNumerals;
    return (
      <div>
        {minNumerals.map(this.renderProgress)}
      </div>
    );
  }
}
export default RootMinor;