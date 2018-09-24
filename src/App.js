import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import * as paths from './constants/paths.js';
import membersData from './data/members.json';
import Timeline from './components/Timeline';
import Header from './components/Header';
import Members from './components/Members/members';
import './App.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>

          <Route
            exact path={ paths.HISTORY }
            component={ () => <Timeline />}
          />
          <Route
            path={ paths.MEMBERS }
            component={ () => <Members membersData={ membersData } /> }
          />

        </div>
      </HashRouter>
    );
  }
}

export default App;
