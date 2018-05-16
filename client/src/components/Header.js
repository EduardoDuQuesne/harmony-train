import React, { Component } from 'react';
import NavBar from './NavBar';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <h1>harmony train</h1>
        </div>
        <NavBar 
        className="flex-nav"
        logout={this.props.logout} 
        isLoggedIn={this.props.isLoggedIn} 
        updateState={this.props.updateState} 
        getProgressData={this.props.getProgressData}
        />
      </div>
    );
  }
}
export default Header;
