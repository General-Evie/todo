import React from 'react';
import './App.css';
import Container from './components/Container';
import { SunIcon } from './components/svgs/SunSvg';
import { MoonIcon } from './components/svgs/MoonSvg';

interface AppProps { }


const App: React.FC<AppProps> = () => {


  return (
    <div className="App">
      <Container />

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/General-Evie" target="_blank">Evie Dickman</a>.
      </div>
    </div>
  );
}

export default App;
