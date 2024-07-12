import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ClientesList from './components/ClientesList';
import GestoresList from './components/GestoresList';
import PagosList from './components/PagosList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clientes">Clientes</Link>
            </li>
            <li>
              <Link to="/gestores">Gestores</Link>
            </li>
            <li>
              <Link to="/pagos">Pagos</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/clientes">
            <ClientesList />
          </Route>
          <Route path="/gestores">
            <GestoresList />
          </Route>
          <Route path="/pagos">
            <PagosList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Bienvenido a la aplicación.</p>
  </div>
);

export default App;