import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProgressOverview from "./ProgressOverview";
import MajorProgress from "./MajorProgress";
import MinorProgress from "./MinorProgress";
import {Tabs, Tab} from 'material-ui/Tabs';

class Progress extends Component {
  
  componentDidMount = () => {
    this.props.getProgressData();
  }

  render() {
    return (
      <MuiThemeProvider>
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
        </MuiThemeProvider>
    );
  }
}
export default Progress;