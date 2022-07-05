import React from "react";
import {useLocalStorage} from './useLocalStorage.js'

const useTodos = () => {
    const {
      item: todos,
      saveItem: saveTodos,
      sincronizeItem: sincronizeTodos,
      loading,
      error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

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

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        completed: false,
        text: text
      });
      saveTodos(newTodos);
    }

    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    }
    
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      
      const newItem = [...todos];
      newItem.splice(todoIndex, 1);
      saveTodos(newItem);
    }

    console.log('Render antes del use effect');

    React.useEffect(() => {
      console.log('use effect');
    }, [totalTodos]); //cada vez que se renderice lo que está en el segundo argumento se ejecutara la funcion (primer argumento)
    
    console.log('Render despues del use effect');

    return {
      error,
      loading,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
      sincronizeTodos 
    };
}

export {useTodos};