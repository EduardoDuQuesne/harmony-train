import React, { Component } from 'react';
import MajorProgressCircles from './MajorProgressCircles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../css/majorProgress.css';

class MajorProgress extends Component {
  
  render() {
    const [...keys] = this.props.majorProgress
    return (
      <MuiThemeProvider>
        <Tabs>
          {keys.map(key => {
            return (  
              <Tab label={key.keyName} key={key.keyName}>
                <MajorProgressCircles keyName={key.keyName}  chords={key.progress} />
              </Tab>
              )
          })}
        </Tabs>
      </MuiThemeProvider>
    );
  }
}
export default MajorProgress;