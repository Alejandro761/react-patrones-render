import React from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));

  const {
    sincronizedItem,
    error,
    loading,
    item
  } = state;

  const onError = (error) => dispatch({type: actionTypes.error, payload: error});
  
  const onSuccess = (item) => { 
    dispatch({type: actionTypes.success, payload: item})
  };
  
  const onSave = (item) => { 
    dispatch({type: actionTypes.save, payload: item})
  };
  
  const onSincronize = () => dispatch({type: actionTypes.sincronize});
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem; //este sera la lista de todos pero sin ser parseado
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
        // setItem(parsedItem);
        // setLoading(false);
        // setSincronizedItem(true);
      } catch (error) {
        onError(error);
        // setError(error);
      }
      
    }, 1000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem); //actualizacion en local storage
      onSave(newItem);
      // setItem(newItem); //actualizacion en el estado de react
    } catch (error) {
      onError(error);
        // setError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  }

  return {item, saveItem, loading, error, sincronizeItem};
}

const initialState = ({ initialValue }) => ({
  sincronizedItem : true,
  error : false,
  loading : true,
  item : initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
};

const reducerObject = (state, payload) => ({
  [actionTypes.error] : {
    ...state,
    error: true
  },  
  [actionTypes.success] : {
    ...state,
    error: false,
    item: payload,
    sincronizedItem: true,
    loading: false,
  },  
  [actionTypes.save] : {
    ...state,
    item: payload,
  },  
  [actionTypes.sincronize] : {
    ...state,
    loading: true,
    sincronizedItem: false,
  },  
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export {useLocalStorage};