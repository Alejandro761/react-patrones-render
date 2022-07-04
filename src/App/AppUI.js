import React from "react";
import { TodoHeader } from "../TodoHeader";
import {TodoCounter} from '../TodoCounter';
import {TodoSearch } from '../TodoSearch';
import {CreateTodoButton } from '../CreateTodoButton';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';
import { TodoForm } from "../TodoForm";

function AppUI() {
    const {
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
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>

            <TodoHeader>
                <TodoCounter totalTodos={totalTodos} 
                    completedTodos={completedTodos} />
                <TodoSearch searchValue={searchValue} 
                    setSearchValue={setSearchValue} />  
            </TodoHeader>

            <TodoList>
                {error && <p>Estamos cargando</p> } {/* error && pregunta si error es true */}
                {loading && <p>Estamos cargando</p>} {/* error && pregunta si error es true */}
                {(!loading && !searchedTodos.length /* quiere decir que si su tamaño es 0 */) && <p>Crea tu primer todo!</p> } {/* la primera && se comporta con AND, y la segunda que es junto al elemento es lo que se pondra si se cumpla la condicion */}
                {searchedTodos.map(todo => (
                  <TodoItem 
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>
            
            {openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                {/* <p>{searchedTodos[0]?.text}</p> el ? le pregunta si existe el array, si no existe entonces no lo pone */}
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    );
}

export {AppUI};