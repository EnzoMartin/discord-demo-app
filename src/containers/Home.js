import React, { Component } from 'react';
import Page from '../components/Page';
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <Page>
        <p className="intro">
          Hurrah!
        </p>
      </Page>
    );
  }
}

export default Home;
