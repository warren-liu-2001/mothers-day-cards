import React, { Component } from 'react';
import './App.css';


import Card from './card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-titleX">You've Received A Card!</div>
        <div className="App-Description">Care To Open It?</div>
        <div className="SubPages">
          <Card />
        </div>
      </div>
      );
    }
  }

export default App;
