import React from 'react';
import eliminarIcono from '../assets/no.png'; 

const ListaTareas = ({ tareas, onEliminar }) => {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          {tarea.texto}
          <button onClick={() => onEliminar(tarea.id)} style={{ marginLeft: '10px' }} > 
            <img src = {eliminarIcono} alt="Eliminar" width="20" height="20" /> </button>
        </li>
      ))}
    </ul>
  );
};

export default ListaTareas;
