import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import IconoCarrito from '../icono-carrito/icono-carrito.component';
import DropdownCarrito from '../dropdown-carrito/dropdown-carrito.component';
import {selectCarritoHidden} from '../../redux/carrito/carrito.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
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
                <div className='opcion' onClick={() => auth.signOut()}>CERRAR SESIÓN</div>
                :
                <Link className='opcion' to='/iniciarsesion'>INICIAR SESIÓN</Link>
            }
            <IconoCarrito />
        </div>
        {hidden ? null:<DropdownCarrito />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCarritoHidden
});

export default connect(mapStateToProps)(Header);