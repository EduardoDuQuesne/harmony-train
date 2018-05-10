import React, { Component } from 'react';
import ClearData from './ClearData';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProgressOverview from "./ProgressOverview";
import MajorProgress from "./MajorProgress";
import MinorProgress from "./MinorProgress";
import {Tabs, Tab} from 'material-ui/Tabs';

class Progress extends Component {
  
  componentDidMount = () => {
    console.log('PROGRESS MOUNTED');
    this.props.getProgressData();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
            <Tabs>
              <Tab label="Overview">
                <ProgressOverview username={this.props.username} />
              </Tab>
              <Tab label="Major Keys">
                <MajorProgress majorProgress={this.props.majorProgress}/>
              </Tab>
              <Tab label="Minor Keys">        
                <MinorProgress minorProgress={this.props.minorProgress} />
              </Tab>
            </Tabs>
            <ClearData resetData={this.props.resetData} />        
        </div>
        </MuiThemeProvider>
    );
  }
}
export default Progress;