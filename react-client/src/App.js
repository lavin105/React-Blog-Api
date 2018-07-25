import React, { Component } from 'react';
import './App.css';
import Posts from './Components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>

          <div id="banner">

          </div>
        </header>
        <Posts />
       
      </div>
    );
  }
}

export default App;
