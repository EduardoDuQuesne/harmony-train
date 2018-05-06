import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChordProgress from "./ChordProgress";
import KeyProgress from "./KeyProgress";

import {Tabs, Tab} from 'material-ui/Tabs';

class Progress extends Component {
  componentDidMount = () => {
    this.props.getProgressData();
  }
  render() {
    return (
      <MuiThemeProvider>
        <Tabs>
          <Tab label="By Key">
            <KeyProgress keyProgress={this.props.keyProgress}/>
          </Tab>
          <Tab label="By Chord">        
            <ChordProgress />
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}
export default Progress;