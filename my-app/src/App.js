import React from 'react';
import './App.css';
import Hair from './components/Hair'
import Eye from './components/Eye'
import Nose from './components/Nose'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Hair />
      <Eye />
      <Nose />
      <Eye />
    </div>
  );
}

export default App;
