import React, { Component } from 'react';
import './App.css';
import Posts from './Components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>

          <div id="banner">
          <h1 id="my_blog">Brandon's Blog</h1>

          </div>
        </header>
        <Posts />
       
      </div>
    );
  }
}

export default App;
