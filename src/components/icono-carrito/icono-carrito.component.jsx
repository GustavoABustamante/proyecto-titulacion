import React from 'react';
import {connect} from 'react-redux';

import {toggleCarritoHidden} from '../../redux/carrito/carrito.actions';
import {selectContadorItemsCarrito} from '../../redux/carrito/carrito.selectors';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './icono-carrito.styles.scss';

const IconoCarrito = ({toggleCarritoHidden, contadorItems}) => (
    <div className='icono-carrito' onClick={toggleCarritoHidden}>
        <ShoppingIcon className='icono-compras'/>
        <span className='contador-items'>{contadorItems }</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCarritoHidden: () => dispatch(toggleCarritoHidden())
});

const mapStateToProps = (state) => ({
    contadorItems: selectContadorItemsCarrito(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(IconoCarrito);