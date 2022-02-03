import './App.css';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from "react-router-dom";
import {InstrumentListPage} from "./InstrumentListPage";
function App() {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={'/'} activeClassName="active" exact>
              <span className="nav-link">Hangszerek</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/uj-hangszer'} activeClassName="active">
              <span className="nav-link">Új hangszer</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <Switch>
      <Route path="/" exact component={InstrumentListPage} />

      <Route path="/hangszer/:hangszerId">
      Hangszer aloldal
      </Route>
      <Route path="/uj-hangszer">
      Új hangszer létrehozó oldal
      </Route>
      <Route>
        <Redirect to={"/"} />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
