import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Timeline  from './components/Timeline.js';
import Header from './components/Header.js';
import * as paths from './constants/paths.js';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <HashRouter>
      <Route
        exact path={paths.HISTORY}
        component={() => <Timeline />}
      />
      </HashRouter>
      </div>
    );
  }
}

export default App;
