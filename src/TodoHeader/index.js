import React from "react";

function TodoHeader( {children, loading} ) {
    
    return (
        <header>
            { React.Children.toArray(children).map(child => React.cloneElement(child, {loading: loading}) )

            //se crea un clon de los hijos de todoHeader, loading lo mandamos como un objeto para que agregue la propiedad a los hijos
            }
        </header>
    );
}

export {TodoHeader};