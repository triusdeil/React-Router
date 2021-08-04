import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Contactos from "./components/Contactos";
import Inicio from "./components/Inicio";
import Civilizacion from "./components/Civilizacion";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark mt-5">
            Inicio
          </Link>
          <Link to="/contactos" className="btn btn-dark mt-5">
            contactos
          </Link>
          <NavLink to="/nosotros" className="btn btn-dark mt-5">
            Nosotros
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/nosotros/:id" exact>
            <Civilizacion />
          </Route>
          <Route path="/nosotros" exact>
            <Nosotros />
          </Route>
          <Route path="/contactos" exact>
            <Contactos />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
