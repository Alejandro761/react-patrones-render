import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

// constApp styles = {
//   color: 'white',
//   backgroundColor: 'black',
//  }; este objeto se puede pasar como los estilos

function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
    // <h2 style={styles}>Has completado 2 de 3 TODOs</h2> una forma de agregar css en react es ponerle style y pasarle un objeto
    <h2 className='TodoCounter'> Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export {TodoCounter};