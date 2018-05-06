import React, { Component } from 'react';
import KeyProgressCircles from './KeyProgressCircles';
import '../css/keyProgress.css';

class KeyProgress extends Component {
  
  render() {
    const [...keys] = this.props.keyProgress
    return (
      <div>
      {keys.map(key => {
        return (  
          <div key={key.keyName}>
            <h4 >{key.keyName}</h4>
              <KeyProgressCircles keyName={key.keyName}  chords={key.progress} />
          </div>
        )
      })}
      </div>
    );
  }
}
export default KeyProgress;