import React, {Suspense} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import "./App.css";
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Studies from './pages/Studies';
import Projects from './pages/Projects';

import { useTranslation } from 'react-i18next';

function Traducciones() {
  const {t, i18n} = useTranslation('global');
  return (
  <React.Fragment >
      <CssBaseline />
      {/* <h1>{t('title')}</h1>
      <p>Idioma actual: {i18n.language}</p>
      <button onClick={()=> {i18n.changeLanguage('es')}}>ES</button>
      <button onClick={()=> {i18n.changeLanguage('en')}}>EN</button> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experiencia" component={Experience} />
        <Route exact path="/estudios" component={Studies} />
        <Route exact path="/proyectos" component={Projects} />
        <Route exact path="/contacto" component={Contact} />
      </Switch>
    </React.Fragment>
    )
}

function App() {
  
  return (
    <Suspense fallback="Cargando traducciones...">
      <Traducciones />
    </Suspense>
  );
}

export default App;
