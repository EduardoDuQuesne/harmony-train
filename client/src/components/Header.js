import React, { Component } from 'react';
import NavBar from './NavBar';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Harmony Train</h1>
        </div>
        <NavBar 
        logout={this.props.logout} 
        isLoggedIn={this.props.isLoggedIn} 
        updateState={this.props.updateState} 
        />
      </div>
    );
  }
}
export default Header;
