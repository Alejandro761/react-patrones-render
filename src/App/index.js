import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from "../TodoHeader";
import {TodoCounter} from '../TodoCounter';
import {TodoSearch } from '../TodoSearch';
import {CreateTodoButton } from '../CreateTodoButton';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {Modal} from '../Modal';
import { TodoForm } from "../TodoForm";
import {TodosError} from '../TodosError'
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';

/* const defaultTodos = [
  {text: 'Comer tacos', completed: false},
  {text: 'Ir al cine', completed: false},
  {text: 'Aprender React', completed: false},
] */

//stringify para hacerlo string, pasrse para hacerlo un objeto

function App() {
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
    addTodo
  } = useTodos();

  return (
    <React.Fragment>

        <TodoHeader>
            <TodoCounter totalTodos={totalTodos} 
                completedTodos={completedTodos} />
            <TodoSearch searchValue={searchValue} 
                setSearchValue={setSearchValue} />  
        </TodoHeader>

        <TodoList error={error} 
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos = {totalTodos}
          searchValue = {searchValue}
          onError={() => <TodosError /> }
          onLoading = {() => <TodosLoading/> }
          onEmptyTodos = {() => <EmptyTodos/> }
          onEmptySearchResults = {
            (searchText) => <p>No hay resultado para {searchText}</p> }
          render = {todo => (
            <TodoItem 
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)} />
            )}
        />
        
        {openModal && (
            <Modal>
                <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
            {/* <p>{searchedTodos[0]?.text}</p> el ? le pregunta si existe el array, si no existe entonces no lo pone */}
            </Modal>
        )}

        <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
);
}

export default App;