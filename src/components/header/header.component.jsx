import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='contenedor-logo' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='opciones'>
            <Link className='opcion' to='/articulos'>
                ARTICULOS
            </Link>
            <Link className='opcion' to='/articulos'>
                CONTACTO
            </Link>
            {
                currentUser ?
                <div className='opcion' onClick={() => auth.signOut()}>Cerrar sesión</div>
                :
                <Link className='opcion' to='/iniciarsesion'>Iniciar sesión</Link>
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);