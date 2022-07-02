import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <input
      className="TodoSearch"
      placeholder="Tacos" 
      value={searchValue}
      onChange={onSearchValueChange} /> //on change es un evento cuando escribes en el input 
  );
}

export {TodoSearch};