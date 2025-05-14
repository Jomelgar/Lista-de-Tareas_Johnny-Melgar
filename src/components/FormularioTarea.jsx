import React, { useState } from 'react';

const FormularioTarea = ({ onAgregar }) => {
  const [texto, setTexto] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      onAgregar(texto.trim());
      setTexto('');
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormularioTarea;
