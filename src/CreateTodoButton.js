import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
  const onClickButton = (msg) => {
    alert(msg);
  }

    return ( 
      <button className="CreateTodoButton"
        onClick={() => onClickButton('*se abre*')} >+</button>
    ); //si la funcion que le queremos pasar a on no necesita parametro simplemente podemos ponerle on ={funcion},
};

export {CreateTodoButton};