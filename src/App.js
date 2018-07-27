import React, { Component } from 'react';
import Dashboard from './sections/Dashboard.js';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
  }
}

export default App;


// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Welcome to React</h1>
//   </header>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>
