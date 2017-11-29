import React from 'react';

import '../styles/Navigation.css';
import Constants from '../constants';
import NavItem from '../components/NavItem';

function Navigation(){
  return (
    <nav id="navigation">
      <div id="navbar">
        <ul>
          <NavItem to={Constants.ROUTE_HOME}>Home</NavItem>
          <NavItem to={Constants.ROUTE_ABOUT}>About</NavItem>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
