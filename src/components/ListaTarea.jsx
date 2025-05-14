import React from 'react';

const ListaTareas = ({ tareas, onEliminar }) => {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          {tarea.texto}
          <button onClick={() => onEliminar(tarea.id)}>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="Eliminar" width="20" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListaTareas;