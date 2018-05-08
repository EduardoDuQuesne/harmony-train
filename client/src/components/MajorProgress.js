import React, { Component } from 'react';
import MajorProgressCircles from './MajorProgressCircles';
import '../css/majorProgress.css';

class MajorProgress extends Component {
  
  render() {
    const [...keys] = this.props.majorProgress
    return (
      <div>
      {keys.map(key => {
        return (  
          <div key={key.keyName}>
            <h4 >{key.keyName}</h4>
              <MajorProgressCircles keyName={key.keyName}  chords={key.progress} />
          </div>
        )
      })}
      </div>
    );
  }
}
export default MajorProgress;