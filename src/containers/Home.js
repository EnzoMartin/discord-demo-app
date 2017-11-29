import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Constants from '../constants';
import Page from '../components/Page';
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <Page>
        <p className="intro">
          <NavLink className="btn" to={Constants.ROUTE_MODAL_HOME}>Open</NavLink>
        </p>
      </Page>
    );
  }
}

export default Home;
