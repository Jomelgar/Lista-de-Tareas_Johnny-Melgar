import React,{useState} from 'react';

const FormularioTarea = ({ onAgregar }) => {
  const [texto, setTexto] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      onAgregar(texto);
      setTexto('');
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Escribe una tarea.."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="button" onClick={manejarSubmit}>Agregar</button>
    </form>
  );
};

export default FormularioTarea;