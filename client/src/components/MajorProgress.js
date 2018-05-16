import React, { Component } from 'react';
import KeyBar from './KeyBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

class MajorProgress extends Component {
  
  render() {
    const [...keys] = this.props.majorProgress
    console.log("Major Progress", keys);
    return (
      <MuiThemeProvider>
        <Tabs inkBarStyle={{backgroundColor: '#EFBC9B'}}>
          {keys.map(key => {
            {if (key.dataAvailable) {
              return (
                <Tab 
                  label={key.keyName} key={key.keyName} 
                  className={`stat-tab`}>
                  <KeyBar keyName={key.keyName}  chords={key.progress} />
                </Tab>
              )
            }}     
          })}
        </Tabs>
      </MuiThemeProvider>
    );
  }
}
export default MajorProgress;