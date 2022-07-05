import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/index.js';

// function App() {
//     return(
//         <h1>Hola Ale</h1>
//     );
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/> /* este es un componente, no un elemento html, empieza con mayuscula */
);