import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import * as paths from './constants/paths.js';
import membersData from './data/members.json';
import Timeline from './components/Timeline';
import Header from './components/Header';
import Members from './components/Members/index';
import './App.css';

/*
import react
import external_deppendencies
import internal_js
import internal_styles
*/

/*
comment to create pull request
*/

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
<Header/>
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
