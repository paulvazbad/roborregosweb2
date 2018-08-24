import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Timeline  from './components/Timeline.js';

class App extends Component {
  render() {
    return (
      <Timeline/>
    );
  }
}

export default App;
