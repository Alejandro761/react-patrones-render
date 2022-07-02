import React from "react";
import {TodoContext} from '../TodoContext';
import './TodoForm.css';

const TodoForm = () => {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChangeFunction = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onSubmitFunction = (event) => {
        event.preventDefault(); //preventDefault cancelara la accion que genera ese evento, en este caso, evitara que submit recargue la pagina  
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmitFunction} > {/* la propiedad onSubmit es un evento */}
            <label>Holi</label>
            <textarea
                value = {newTodoValue}
                onChange = {onChangeFunction} //la propiedad onChange es un evento 
                placeholder="Deberiamos jugar videojuegos we"/>
            <div>
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit">Añadir</button>
            </div>
        </form>
    );
}

export {TodoForm};