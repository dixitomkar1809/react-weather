import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './AppBar/AppBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar/>
      </div>
    );
  }
}

export default App;
