import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClientesList from './components/cliente/cliente-list';
import GestoresList from './components/gestores/gestores-list';
import PagosList from './components/pagos/pagos-list';
import Navbar from './components/NavBar/navbar';
import ClienteDetalle from './components/cliente-detalle/cliente-detalle';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/clientes" element={<ClientesList/>}/>
          <Route path="/gestores" element={<GestoresList/>}/>
          <Route path="/pagos" element={<PagosList/>}/>
          <Route path="/" element={<ClienteDetalle/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
