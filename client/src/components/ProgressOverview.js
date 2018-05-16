import React, { Component } from 'react';
import TotalScore from './TotalScore';
import RootMajor from './RootMajor';
import RootMinor from './RootMinor';
import ResetData from './ResetData';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../css/ProgressOverview.css'

class ProgressOverview extends Component {

  renderPage = () => {
    return (
      <MuiThemeProvider>
        <Tabs inkBarStyle={{backgroundColor: '#EFBC9B'}}>
          <Tab label="General Performance" className="stat-tab">
            <div className="overview-flex">
              <div className="overview-flex">
                <TotalScore 
                totalScore={this.props.totalScore}
                />
              </div>
              <div>
                <RootMajor 
                  majNumerals={this.props.majNumerals}
                  majorRoot={this.props.majorRoot}                  
                />
              </div>
              <div>
                <RootMinor 
                  minNumerals={this.props.minNumerals}  
                  minorRoot={this.props.minorRoot}  
                />
              </div>
            </div>
            <p className="overview-desc">Percentage of questions answered correctly by chord root</p>
            <div className="reset-container">
              <ResetData resetData={this.props.resetData} />  
            </div>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    )
  }
  
  render() {
    return (
      <div>
        {this.props.isLoggedIn ? this.renderPage() : ""}
      </div>
    );
  }
}
export default ProgressOverview;