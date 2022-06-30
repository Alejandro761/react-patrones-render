import React from 'react';
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';

const todos = [
  {text: 'Comer tacos', completed: false},
  {text: 'Ir al cine', completed: false},
  {text: 'Aprender React', completed: false},
]

function App(props) {
  return (
    <React.Fragment> 
      <TodoCounter/>
      <TodoSearch />  
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;