import React from 'react';
import './TodoCounter.css';

// constApp styles = {
//   color: 'white',
//   backgroundColor: 'black',
//  }; este objeto se puede pasar como los estilos

function TodoCounter({totalTodos, completedTodos, loading}) {
  return (
    <h2 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}> Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export {TodoCounter};