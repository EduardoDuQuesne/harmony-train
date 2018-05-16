import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProgressOverview from "./ProgressOverview";
import MajorProgress from "./MajorProgress";
import MinorProgress from "./MinorProgress";
import {Tabs, Tab} from 'material-ui/Tabs';
import '../css/progress.css';

class Progress extends Component {
  
  //ON MOUNT, GET USER DATA
  componentDidMount = () => {
    this.props.getProgressData();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
            <Tabs inkBarStyle={{backgroundColor: '#EFBC9B'}}>            
              <Tab label="Overview" className="stat-tab">
                <ProgressOverview 
                  username={this.props.username} 
                  majNumerals={this.props.majNumerals} 
                  minNumerals={this.props.minNumerals} 
                  majorRoot={this.props.majorRoot}                  
                  minorRoot={this.props.minorRoot}  
                  totalScore={this.props.totalScore}
                  resetData={this.props.resetData}
                  isLoggedIn={this.props.isLoggedIn}
                />
              </Tab>

              <Tab label="Major Keys" className="stat-tab">
                <MajorProgress 
                  majorProgress={this.props.majorProgress}
                />
              </Tab>

              <Tab label="Minor Keys" className="stat-tab">        
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