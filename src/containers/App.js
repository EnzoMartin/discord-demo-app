import React from 'react';
import { createBrowserHistory as createHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Constants from '../constants';
import '../styles/App.css';

// Generics
import Navigation from './Navigation';
import Header from '../components/Header';

// Pages
import Home from './Home';
import About from './About';

const history = createHistory();

function App(){
  return (
    <Router history={history}>
      <table id="main" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td>
              <Route path={Constants.ROUTE_HOME} component={Header} />
            </td>
          </tr>
          <tr>
            <td>
              <Route path={Constants.ROUTE_HOME} component={Navigation} />
            </td>
          </tr>
          <tr>
            <td>
              <Switch>
                <Route exact path={Constants.ROUTE_HOME} component={Home} />
                <Route exact path={Constants.ROUTE_ABOUT} component={About} />
              </Switch>
            </td>
          </tr>
        </tbody>
      </table>
    </Router>
  );
}

export default App;
