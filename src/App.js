import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [tablero, setCartas] = useState([

    { carta: 1, disposicion: false, Accesibilidad: true },
    { carta: 1, disposicion: false, Accesibilidad: true },
    { carta: 2, disposicion: false, Accesibilidad: true },
    { carta: 2, disposicion: false, Accesibilidad: true },
    { carta: 3, disposicion: false, Accesibilidad: true },
    { carta: 3, disposicion: false, Accesibilidad: true },
    { carta: 4, disposicion: false, Accesibilidad: true },
    { carta: 4, disposicion: false, Accesibilidad: true },
    { carta: 5, disposicion: false, Accesibilidad: true },
    { carta: 5, disposicion: false, Accesibilidad: true },
    { carta: 6, disposicion: false, Accesibilidad: true },
    { carta: 6, disposicion: false, Accesibilidad: true },
  ]);

  const [comparacion, setComparacion] = useState([]);

  function Almacenar(index) {
    // Solo almacena el índice si la carta está accesible
    if (tablero[index].Accesibilidad) {
      setComparacion((prev) => {
        const nuevaComparacion = [...prev, index];
        condiciones(nuevaComparacion); 
        return nuevaComparacion;
      });
    }
  }

  const condiciones = (comparacion) => {
    if (comparacion.length === 1) {

      const nuevoTablero = [...tablero];
      nuevoTablero[comparacion[0]].disposicion = true; 
      setCartas(nuevoTablero);
    } else if (comparacion.length === 2) {

      const [index1, index2] = comparacion;
      const nuevoTablero = [...tablero];
      
     
      nuevoTablero[index1].disposicion = true;
      nuevoTablero[index2].disposicion = true;
      setCartas(nuevoTablero);

      if (tablero[index1].carta === tablero[index2].carta) {

        nuevoTablero[index1].accesible = false;
        nuevoTablero[index2].accesible = false;
        setCartas(nuevoTablero);
        setComparacion([]); 

      } else {

        setTimeout(() => {
          nuevoTablero[index1].disposicion = false;
          nuevoTablero[index2].disposicion = false;
          setCartas(nuevoTablero);
          setComparacion([]);
        }, 1000); 
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="cards-container">
          {tablero.map((item, index) => (
            <button
              key={index}
              className="card-back"
              onClick={() => Almacenar(index)} 
              disabled={item.Accesibilidad != true} 
            >
              {item.disposicion ? item.carta : "?"}
            </button>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;