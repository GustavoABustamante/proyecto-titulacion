import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/home/home.component';
import PaginaArticulos from './pages/articulos/articulos.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/articulos' component={PaginaArticulos} />
      </Switch>
    </div>
  );
}

export default App;
