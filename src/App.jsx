import React, { Component } from 'react';

import './App.css';

import TestComponent from './components/test/TestComponent';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello from App</h1>
        <TestComponent />
      </div>
    );
  }
}

export default App;
