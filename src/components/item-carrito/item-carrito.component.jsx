import React from 'react';
import './item-carrito.styles.scss';

const ItemCarrito = ({item:{imagenUrl, precio, nombre, quantity}}) => {
    const formatoMonedaChilena = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    });
    return(
    <div className='item-carrito'>
        <img src={imagenUrl} alt='item' />
        <div className='detalles-item'>
            <span className='nombre'>{nombre}</span>
            <span className='precio'>{quantity} x {formatoMonedaChilena.format(precio)}</span>
        </div>
    </div>
)};

export default ItemCarrito;