import React from "react";
import {useLocalStorage} from './useLocalStorage.js'

const TodoContext = React.createContext();

const TodoProvider = (props) => {
    const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error,
    } = useLocalStorage('TODOS_V1', []);

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

    console.log('Render antes del use effect');

    React.useEffect(() => {
      console.log('use effect');
    }, [totalTodos]); //cada vez que se renderice lo que está en el segundo argumento se ejecutara la funcion (primer argumento)
    
    console.log('Render despues del use effect');

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};