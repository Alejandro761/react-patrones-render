import React from "react";
import {TodoCounter} from '../TodoCounter';
import {TodoSearch } from '../TodoSearch';
import {CreateTodoButton } from '../CreateTodoButton';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {TodoContext} from '../TodoContext'

function AppUI() {
    return (
        <React.Fragment>
            <TodoContext.Consumer>
                {({totalTodos, completedTodos}) => (
                    <TodoCounter
                        total={totalTodos} 
                        completed={completedTodos} />
                )}
            </TodoContext.Consumer>

            <TodoContext.Consumer>
                {({searchValue, setSearchValue}) => (
                    <TodoSearch 
                        searchValue={searchValue}
                        setSearchValue={setSearchValue} />  
                )}
            </TodoContext.Consumer>

            <TodoContext.Consumer>
                {({ error, loading, searchedTodos, completeTodo, deleteTodo}) => (
                    <TodoList>
                        {error && <p>Estamos cargando</p> }
                        {loading && <p>Estamos cargando</p> }
                        {(!loading && !searchedTodos.length /* quiere decir que si su tamaño es 0 */) && <p>Crea tu primer todo!</p> }
                        {searchedTodos.map(todo => (
                          <TodoItem 
                              key={todo.text}
                              text={todo.text}
                              completed={todo.completed}
                              onComplete={() => completeTodo(todo.text)}
                              onDelete={() => deleteTodo(todo.text)} />
                        ))}
                    </TodoList>
                )}
            </TodoContext.Consumer>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export {AppUI};