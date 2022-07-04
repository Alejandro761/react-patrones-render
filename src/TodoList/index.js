import React from "react";
import './TodoList.css'

const TodoList = (props) => {
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}       

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}
            {/* {props.searchedTodos.map(todo => props.render(todo))} otra manera  */}
            {props.searchedTodos.map(props.render)}
            
            <ul>
                {props.children}
            </ul>
        </section>
    )
};

export {TodoList};