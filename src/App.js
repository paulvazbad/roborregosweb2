import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Timeline  from './components/History/index.js';
import Header from './components/Header/index.js';
import * as paths from './constants/paths.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
          <Header />
          </div>
            <Route
              exact path={paths.HISTORY}
              component={() => <Timeline />}
            />
        </div>
      </HashRouter>
    );
  }
}

export default App;
