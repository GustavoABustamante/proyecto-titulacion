import React from 'react';
import {connect} from 'react-redux';

import {toggleCarritoHidden} from '../../redux/carrito/carrito.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './icono-carrito.styles.scss';

const IconoCarrito = ({toggleCarritoHidden}) => (
    <div className='icono-carrito' onClick={toggleCarritoHidden}>
        <ShoppingIcon className='icono-compras'/>
        <span className='contador-items'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCarritoHidden: () => dispatch(toggleCarritoHidden())
});

export default connect(null, mapDispatchToProps)(IconoCarrito);