import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/home/home.component';

const PaginaGorros = () => (
  <div>
    <h1>Gorros</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/gorros' component={PaginaGorros} />
      </Switch>
    </div>
  );
}

export default App;
