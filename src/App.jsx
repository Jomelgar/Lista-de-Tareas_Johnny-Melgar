import React, { useState } from 'react';
import FormularioTarea from './components/FormularioTarea';
import ListaTareas from './components/ListaTareas';

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(1);

const agregarTarea = (texto) => {
  const nuevaTarea = { id: contador, texto };
  setContador(contador + 1);
  setTareas([...tareas, nuevaTarea]);
};


  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Lista de Tareas</h1>
      <FormularioTarea onAgregar={agregarTarea} />
      <ListaTareas tareas={tareas} onEliminar={eliminarTarea} />
      <p>Total: {tareas.length} tareas</p>
    </div>
  );
};

export default App;
