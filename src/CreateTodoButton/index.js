import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState); //para alternar entre true y false
  }

    return ( 
      <button className="CreateTodoButton"
        onClick={onClickButton} >+</button>
    ); //si la funcion que le queremos pasar a on no necesita parametro simplemente podemos ponerle on ={funcion},
};

export {CreateTodoButton};