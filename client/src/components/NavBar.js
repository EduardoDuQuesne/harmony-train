import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css';

class NavBar extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <ul>
        <li>
          <Link to={'/'}>Train</Link>
        </li>

        <li className={!isLoggedIn ? 'hidden' : ''}>
          <Link to={'/progress'}  onClick={this.props.getProgressData}>Progress</Link>
        </li>

        <li className={isLoggedIn ? 'hidden' : ''}>
          <Link to={'/login'} onClick={this.props.updateState}>Login </Link>
        </li>

        <li className={isLoggedIn ? 'hidden' : ''}>
          <Link to={'/register'} onClick={this.props.updateState}>Register </Link>
        </li>

        <li onClick={this.props.logout} className={!isLoggedIn ? 'hidden' : ''}>
          Logout
        </li>
      </ul>
    );
  }
}

export default NavBar;
