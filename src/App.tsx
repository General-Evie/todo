import React from 'react';
import './App.css';
import Container from './components/Container';
import { SunIcon } from './components/svgs/SunSvg';
import { MoonIcon } from './components/svgs/MoonSvg';

interface AppProps {}


const App: React.FC<AppProps> = () => {


  return (
    <div className="App">
        <Container />
    </div>
  );
}

export default App;
