import React from "react";
import './TodoItem.css'

const TodoItem = (props) => {
    const onComplete = () => {
        alert('Se completo siuuuu' + props.text);
    };
    
    const onDelte = () => {
        alert('Se borro siuuuu' + props.text);
    };

    return(
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
                onClick={onComplete} >√</span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            
            <span
                className="Icon Icon-delete"
                onClick={onDelte} >X</span>
        </li>
    );
};

export {TodoItem};