import React, { Component } from 'react';
import TitleBar from './header/TitleBar.jsx'
import './App.css';

const images = [
    require('./header/kk2.png'),
    require('./header/kk4.png'),
    require('./header/kk5.png')
]

class App extends Component {
  render() {
    return (
      <div className="App">
          <TitleBar/>
        
      </div>
    );
  }
}

export default App;
