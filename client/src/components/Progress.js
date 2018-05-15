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
        <div>
            <Tabs>

              <Tab label="Overview">
                <ProgressOverview 
                  username={this.props.username} 
                  majNumerals={this.props.majNumerals} 
                  minNumerals={this.props.minNumerals} 
                  majorRoot={this.props.majorRoot}                  
                  minorRoot={this.props.minorRoot}  
                  totalScore={this.props.totalScore}
                  resetData={this.props.resetData}
                />
              </Tab>

              <Tab label="Major Keys">
                <MajorProgress 
                  majorProgress={this.props.majorProgress}
                />
              </Tab>

              <Tab label="Minor Keys">        
                <MinorProgress 
                  minorProgress={this.props.minorProgress} 
                />
              </Tab>

            </Tabs>
                  
        </div>
        </MuiThemeProvider>
    );
  }
}
export default Progress;