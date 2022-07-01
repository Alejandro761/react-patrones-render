import React from 'react';
import { AppUI } from './AppUI';

/* const defaultTodos = [
  {text: 'Comer tacos', completed: false},
  {text: 'Ir al cine', completed: false},
  {text: 'Aprender React', completed: false},
] */

//stringify para hacerlo string, pasrse para hacerlo un objeto

const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem); //actualizacion en local storage
    setItem(newItem); //actualizacion en el estado de react
  };

  return [item, saveItem];
}
 
function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    
    const newItem = [...todos];
    newItem[todoIndex].completed = true;
    saveTodos(newItem);
  }
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    
    const newItem = [...todos];
    newItem.splice(todoIndex, 1);
    saveTodos(newItem);
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