import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

function App() {
  return (
      <Router>
        <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        </div>
      </Router>
  );
}

export default App;
