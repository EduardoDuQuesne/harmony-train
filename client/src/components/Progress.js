import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import LinearProgress from 'material-ui/LinearProgress';
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