import React from 'react';
import Tablero from './Tablero'; // Importamos el componente Tablero
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tablero />
      </header>
    </div>
  );
}

export default App;