import React, { Component } from 'react';
// var Icon = require('babel!svg-react!../svg/my-icon.svg?name=Icon');
// import pizza from '../assets/pizza.svg';
import pizza from '../assets/pizza.svg';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid App-header">
          <div className="row">
            <img src={pizza} className="App-logo" alt="logo" />
          </div>
          <div className="row">
            <h2>LetsEat.com</h2>
          </div>
        </div>
      </nav>
    )
  }
}
export default Header;
