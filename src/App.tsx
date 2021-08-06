import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';

function App():JSX.Element {
  return <div className="container">
    <Navbar/>
    <Presentation/>
  </div>
}

export default App;
