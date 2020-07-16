import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import ItemCarrito from '../item-carrito/item-carrito.component';
import './dropdown-carrito.styles.scss';

const DropdownCarrito = ({itemsCarrito}) => (
    <div className='dropdown-carrito'>
        <div className='items-carrito'>
            {
                itemsCarrito.map(itemCarrito => (<ItemCarrito key={itemCarrito.id} item={itemCarrito} />))
            }
        </div>
        <CustomButton>VER CARRITO</CustomButton>
    </div>
);

const mapStateToProps = ({carrito:{itemsCarrito}}) => ({
    itemsCarrito
});

export default connect(mapStateToProps)(DropdownCarrito);