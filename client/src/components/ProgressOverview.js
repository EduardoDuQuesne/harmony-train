import React, { Component } from 'react';
import TotalScore from './TotalScore';
import RootMajor from './RootMajor';
import RootMinor from './RootMinor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../css/ProgressOverview.css'
class ProgressOverview extends Component {
  
  render() {
    return (
      <MuiThemeProvider>
        <Tabs>
          <Tab label="General Performance">
            <TotalScore 
            totalScore={this.props.totalScore}
            />
            <RootMajor 
              majNumerals={this.props.majNumerals}
              majorRoot={this.props.majorRoot}                  
            />
            <RootMinor 
              minNumerals={this.props.minNumerals}  
              minorRoot={this.props.minorRoot}  
            />
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}
export default ProgressOverview;