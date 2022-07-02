import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
  const onClickButton = () => {
    if (props.openModal) {
      props.setOpenModal(false);
    } else {
      props.setOpenModal(true);
    }
  }

    return ( 
      <button className="CreateTodoButton"
        onClick={onClickButton} >+</button>
    ); //si la funcion que le queremos pasar a on no necesita parametro simplemente podemos ponerle on ={funcion},
};

export {CreateTodoButton};