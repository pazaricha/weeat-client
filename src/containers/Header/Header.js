import React, { Component } from 'react';
import './Header.css';
import MainFilter from '../../components/MainFilter/MainFilter';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <h1 className="logo">WeEat 🥙</h1>
          <h2>It's 12:00 and you're hungry 😛</h2>
          <MainFilter />
        </div>
      </header>
    );
  }
}

export default Header;