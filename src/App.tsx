import React from 'react';
import Waka from '../src/atom/Waka'
import MainPage from './poc/MainPage'
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Waka/>
      <MainPage/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
