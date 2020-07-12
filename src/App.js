import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/home/home.component';
import PaginaArticulos from './pages/articulos/articulos.component';
import IniciarSesionRegistrarse from './pages/iniciar-sesion-registrarse/iniciar-sesion-registrarse.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser : user});
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }else{
        this.setState({currentUser: userAuth});
      }
        
      //console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/articulos' component={PaginaArticulos} />
          <Route path='/iniciarsesion' component={IniciarSesionRegistrarse} />
        </Switch>
      </div>
    );
  }
}

export default App;
