import React, { Component } from 'react';
import KeyBar from './KeyBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

class MinorProgress extends Component {
  render() {
    const [...keys] = this.props.minorProgress
    return (
      <MuiThemeProvider>
        <Tabs>
          {keys.map(key => {
            return (  
              <Tab label={key.keyName} key={key.keyName}>
                <KeyBar keyName={key.keyName}  chords={key.progress} />
              </Tab>
              )
          })}
        </Tabs>
      </MuiThemeProvider>
    );
  }
}
export default MinorProgress;