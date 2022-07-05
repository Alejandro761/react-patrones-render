import React from "react";
import { useStorageListener } from "./withStorageListener";

const ChangeAlert = ({sincronize}) => {
    const {show, toggleShow} = useStorageListener(sincronize);

    if (show) {
        return (
            <div>
                <p>Hubo cambios????</p>
                <button onClick={toggleShow}>
                    Volver a cargar la información</button>
            </div>
        );
    } else {
        return null;
    }
}

// const ChangeAlertWithStorageListener = useStorageListener(ChangeAlert);

export { ChangeAlert };