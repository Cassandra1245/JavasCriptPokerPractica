import React, { useState } from 'react';
import Carta from './Carta'; // Importamos el componente Carta
import './App.css';

function Tablero() {
    const generarCartasAleatorias = () => {
        const valores = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];  


        // Mezclando los valores paras las cartas
        for (let i = valores.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [valores[i], valores[j]] = [valores[j], valores[i]]; 
        }
    
        // Creaando cada carta
        const cartas = valores.map((valor) => ({
          carta: valor,
          disposicion: false,
          Accesibilidad: true,
        }));

        return cartas
        
      };
    
  const [tablero, setCartas] = useState(generarCartasAleatorias());
  const [comparacion, setComparacion] = useState([]);

  function Almacenar(index) {
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
      nuevoTablero[comparacion[0]].Accesibilidad = false;
      setCartas(nuevoTablero);
    } else if (comparacion.length === 2) {
      const [index1, index2] = comparacion;
      const nuevoTablero = [...tablero];

      nuevoTablero[index1].disposicion = true;
      nuevoTablero[index2].disposicion = true;
      setCartas(nuevoTablero);

      if (tablero[index1].carta === tablero[index2].carta) {
        nuevoTablero[index1].Accesibilidad = false;
        nuevoTablero[index2].Accesibilidad = false;
        setCartas(nuevoTablero);
        setComparacion([]);
      } else {
        setTimeout(() => {
          nuevoTablero[index1].disposicion = false;
          nuevoTablero[index2].disposicion = false;
          nuevoTablero[index1].Accesibilidad = true;
          setCartas(nuevoTablero);
          setComparacion([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="cards-container">
      {tablero.map((item, index) => (
        <Carta
          key={index}
          carta={item}
          onClick={() => Almacenar(index)}
          disabled={!item.Accesibilidad}
        />
      ))}
    </div>
  );
}

export default Tablero;