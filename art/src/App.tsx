import React from 'react';
import asheville from './Liza-Asheville.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={asheville} className="asheville-photo" alt="asheville" />
        <div className="nav-text">
          <p>Gallery</p>
          <p>Contact</p>
          <p>About</p>
        </div>
        <div className="title">
          Liza Morrison Art
        </div>
      </header>
    </div>
  );
}

export default App;
