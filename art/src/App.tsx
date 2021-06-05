import React from 'react';
import asheville from './Liza-Asheville.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={asheville} className="App-logo" alt="logo" />
        <p>
          Liza Morrison Art
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
