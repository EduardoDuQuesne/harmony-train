import React, { Component } from 'react';

class RootMajor extends Component {  

  renderProgress = (num, i) => {
    let rootStats = this.props.majorRoot;
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
    let majNumerals = this.props.majNumerals;
    return (
      <div>
        {majNumerals.map(this.renderProgress)}
      </div>
    );
  }
}
export default RootMajor;