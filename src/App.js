import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/home/home.component';
import PaginaArticulos from './pages/articulos/articulos.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/articulos' component={PaginaArticulos} />
      </Switch>
    </div>
  );
}

export default App;
