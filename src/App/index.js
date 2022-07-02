import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext'

/* const defaultTodos = [
  {text: 'Comer tacos', completed: false},
  {text: 'Ir al cine', completed: false},
  {text: 'Aprender React', completed: false},
] */

//stringify para hacerlo string, pasrse para hacerlo un objeto
 
function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;