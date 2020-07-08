import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.styles.scss';

const Header = () => (
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
        </div>
    </div>
);

export default Header;