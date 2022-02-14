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
import Navbar from './components/Nav'
import CV from './pages/CV'
import Bio from './pages/Bio'
import Footer from './components/Footer'


function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/portfolio">
            <Navbar />
              <Portfolio />
              <Footer />
          </Route>
          {/* <Route path="/bio">
            <Navbar />
              
              <Footer />
          </Route> */}
          {/* <Route path="/cv">
            <Navbar />
              <CV />
              <Footer />
          </Route> */}
          {/* <Route path="/contact">
            <Navbar />
              <Contact />
              <Footer />
          </Route> */}
          <Route path="/">
            {/* <Home /> */}
            <Navbar />
            <Bio /> 
            <Footer />
          </Route>
        </Switch>
      </Router>
      
  );
}

export default App;
