import React from "react";

const useStorageListener = (sincronize) => {
    const [storageChange, setStorageChange] = React.useState(false);        
        
    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log('cambios');
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    };

    return {
        show: storageChange,
        toggleShow
    };
} 

export {useStorageListener};