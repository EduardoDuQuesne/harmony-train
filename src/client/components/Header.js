import React, { Component } from 'react';
import NavBarMobile from './NavBarMobile';
import '../css/header.css';


class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
            <h1>Harmonic Progress</h1>
        </div>
        <NavBarMobile />
      </div>
    );
  }
}
export default Header;