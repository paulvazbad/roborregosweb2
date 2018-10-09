import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Timeline  from 'components/Timeline/index';
import Header from 'components/Header/index';
import * as paths from 'constants/paths.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />

          <Route
            exact path={ paths.HISTORY }
            component={ () => <Timeline />}
          />

        </div>
      </HashRouter>
    );
  }
}

export default App;
