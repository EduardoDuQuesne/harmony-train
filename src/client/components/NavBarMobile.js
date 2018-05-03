import React, { Component } from 'react';
import '../css/navBarMobile.css';

class NavBarMobile extends Component {
  render() {
    return (
      <ul className="hidden">
        <li>Train</li>
        <li>Progress</li>
      </ul>
    );
  }
}

export default NavBarMobile;