import React, { Component } from 'react';
import MinorProgressCircles from './MinorProgressCircles';


class MinorProgress extends Component {
  render() {
    const [...keys] = this.props.minorProgress
    return (
      <div>
      {keys.map(key => {
        return (  
          <div key={key.keyName}>
            <h4 >{key.keyName}</h4>
              <MinorProgressCircles keyName={key.keyName}  chords={key.progress} />
          </div>
        )
      })}
      </div>
    );
  }
}
export default MinorProgress;