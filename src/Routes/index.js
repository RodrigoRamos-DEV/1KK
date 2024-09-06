import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from '../Pages/home'
import Projeto from "../Pages/projeto";

const Rotas = () =>{



  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projeto" element={<Projeto />} />
          
          
        </Routes>
      
    </BrowserRouter>
  );
}

export default Rotas;
