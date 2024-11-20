import React from 'react';

function Carta({carta, onClick, disabled }) {
  return (
    <button
      className="card-back"
      onClick={onClick}
      disabled={disabled}
      >
      {carta.disposicion ? (
        <span className="card-front">{carta.carta}</span> // Contenido cuando está volteada
      ) : (
        <span className="hidden-content"></span> // Parte trasera
      )}
    </button>
  );
}

export default Carta;