import React from "react";
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState(''); //useState retorna un array, la primera posición retorna el estado ('Ale'), y la segunda nos regresa una funcion para editar el estado

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return [
    <input
      className="TodoSearch"
      placeholder="Tacos" 
      value={searchValue}
      onChange={onSearchValueChange} />, //on change es un evento cuando escribes en el input 
      <p>{searchValue}</p>
  ];
}

export {TodoSearch};