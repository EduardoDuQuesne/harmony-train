import React, { Component } from 'react';
import KeyBar from './KeyBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../css/majorProgress.css';

class MajorProgress extends Component {
  
  render() {
    const [...keys] = this.props.majorProgress
    return (
      <MuiThemeProvider>
        <Tabs inkBarStyle={{backgroundColor: '#EFBC9B'}}>
          {keys.map(key => {
            return (  
              <Tab label={key.keyName} key={key.keyName} className="stat-tab">
                <KeyBar keyName={key.keyName}  chords={key.progress} />
              </Tab>
              )
          })}
        </Tabs>
      </MuiThemeProvider>
    );
  }
}
export default MajorProgress;