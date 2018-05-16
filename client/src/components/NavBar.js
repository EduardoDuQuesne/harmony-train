import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css';

class NavBar extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <ul>
        <li>
          <Link className="react-link" to={'/'}>train</Link>
        </li>

        <li className={!isLoggedIn ? 'hidden' : ''}>
          <Link className="react-link" to={'/progress'}>progress</Link>
        </li>

        <li className={isLoggedIn ? 'hidden' : ''}>
          <Link className="react-link" to={'/login'} onClick={this.props.updateState}>login </Link>
        </li>

        <li className={isLoggedIn ? 'hidden' : ''}>
          <Link className="react-link" to={'/register'} onClick={this.props.updateState}>register </Link>
        </li>

        <li onClick={this.props.logout} className={`logout-btn ${!isLoggedIn ? 'hidden' : ''}`}>
          logout
        </li>
      </ul>
    );
  }
}

export default NavBar;
