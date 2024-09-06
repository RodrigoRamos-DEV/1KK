import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Rotas from './Routes';

import NavBar from './Componentes/NavBar'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Rotas/>
    
    
  </React.StrictMode>
  
);


