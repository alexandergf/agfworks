import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import "./App.css";
import Experience from './components/Experience';
import Contact from './components/Contact';
import Studies from './components/Studies';
import Projects from './components/Projects';

function App() {
  
  return (
    <React.Fragment >
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experiencia" component={Experience} />
        <Route exact path="/estudios" component={Studies} />
        <Route exact path="/proyectos" component={Projects} />
        <Route exact path="/contacto" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
