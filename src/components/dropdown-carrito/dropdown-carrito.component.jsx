import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import ItemCarrito from '../item-carrito/item-carrito.component';
import {selectItemsCarrito} from '../../redux/carrito/carrito.selectors';
import {toggleCarritoHidden} from '../../redux/carrito/carrito.actions';

import './dropdown-carrito.styles.scss';

const DropdownCarrito = ({itemsCarrito, history, dispatch}) => (
    <div className='dropdown-carrito'>
        <div className='items-carrito'>
            {
                itemsCarrito.length ?
                (itemsCarrito.map(itemCarrito => (<ItemCarrito key={itemCarrito.id} item={itemCarrito} />))):(<span className='carrito-vacio'>Tu carrito esta vacio</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/carrito');
            dispatch(toggleCarritoHidden());
            }} >VER CARRITO</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemsCarrito: selectItemsCarrito
});

export default withRouter(connect(mapStateToProps)(DropdownCarrito));