import React from 'react';
import './App.css';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <Container />

      <p>Drag and drop to reorder list</p>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/General-Evie" target="_blank">Evie Dickman</a>.
      </div>
    </div>
  );
}

export default App;
