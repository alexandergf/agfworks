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
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/studies" component={Studies} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
