import React from 'react';

const styles = {
  color: 'white',
  backgroundColor: 'black',
};

function TodoCounter() {
    return (
      <h2 style={styles}>Has completado 2 de 3 TODOs</h2>
    );
}

export {TodoCounter};