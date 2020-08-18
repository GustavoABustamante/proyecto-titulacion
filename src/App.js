import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';

import Home from './pages/home/home.component';
import PaginaArticulos from './pages/articulos/articulos.component';
import IniciarSesionRegistrarse from './pages/iniciar-sesion-registrarse/iniciar-sesion-registrarse.component';
import PaginaVerCarrito from './pages/ver-carrito/ver-carrito.component';

import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

import Footer from './components/footer/footer.component';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser : user});
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }else{
        setCurrentUser(userAuth);
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
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/articulos' component={PaginaArticulos} />
          <Route exact path='/carrito' component={PaginaVerCarrito} />
          <Route exact path='/iniciarsesion' 
          render={() => this.props.currentUser ? (<Redirect to='/' />) : (<IniciarSesionRegistrarse/>)} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
