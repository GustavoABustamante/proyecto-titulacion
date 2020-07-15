import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './dropdown-carrito.styles.scss';

const DropdownCarrito = () => (
    <div className='dropdown-carrito'>
        <div className='items-carrito' />
        <CustomButton>VER CARRITO</CustomButton>
    </div>
);

export default DropdownCarrito;