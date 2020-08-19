import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import IconoCarrito from '../icono-carrito/icono-carrito.component';
import DropdownCarrito from '../dropdown-carrito/dropdown-carrito.component';
import {selectCarritoHidden} from '../../redux/carrito/carrito.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
//import {ReactComponent as Logo} from '../../assets/logo.svg';

import {ContenedorHeader, ContenedorLogo, ContenedorOpciones, LinkOpcion, ContenedorAccesoSalida} from './header.styles';

const Header = ({currentUser, hidden}) => (
    <ContenedorHeader>
        <ContenedorLogo to='/'>
            <img className='logo' src="https://i.ibb.co/sVCvWkj/logo.png" alt="logo"/>
        </ContenedorLogo>
        <ContenedorOpciones>
            <LinkOpcion to='/articulos'>
                ARTICULOS
            </LinkOpcion>
            <LinkOpcion to='/'>
                CONTACTO
            </LinkOpcion>
            {
                currentUser ?
                <ContenedorAccesoSalida>
                    <LinkOpcion to='/'>{currentUser.displayName}</LinkOpcion>   
                    <LinkOpcion as='div' className='opcion' onClick={() => auth.signOut()}>CERRAR SESIÓN</LinkOpcion>
                </ContenedorAccesoSalida>
                :
                <LinkOpcion to='/iniciarsesion'>INICIAR SESIÓN</LinkOpcion>
            }
            <IconoCarrito />
        </ContenedorOpciones>
        {hidden ? null:<DropdownCarrito />}
    </ContenedorHeader>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCarritoHidden
});

export default connect(mapStateToProps)(Header);