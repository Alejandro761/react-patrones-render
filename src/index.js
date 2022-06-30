import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App saludo='Holi'/> /* este es un componente, no un elemento html, empieza con mayuscula */
);