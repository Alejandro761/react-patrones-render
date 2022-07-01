import React from 'react';
import { AppUI } from './AppUI';

/* const defaultTodos = [
  {text: 'Comer tacos', completed: false},
  {text: 'Ir al cine', completed: false},
  {text: 'Aprender React', completed: false},
] */

//stringify para hacerlo string, pasrse para hacerlo un objeto
 
function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText); //lo retornamos para decirle al filter que ese es el criterio de la filtracion
    })
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos); //actualizacion en local storage
    setTodos(newTodos); //actualizacion en el estado de react
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;