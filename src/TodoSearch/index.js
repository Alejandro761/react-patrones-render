import React from "react";
import './TodoSearch.css';

function TodoSearch( {searchValue, setSearchValue} ) {

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