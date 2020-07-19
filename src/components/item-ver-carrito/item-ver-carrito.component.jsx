import React from 'react';

import './item-ver-carrito.styles.scss';

const ItemVerCarrito = ({itemCarrito: {nombre, imagenUrl, precio, quantity}}) => (
    <div className='item-ver-carrito'>
        <div className='contenedor-imagen'>
            <img src={imagenUrl} alt='item carrito' />
        </div>
        <span className='nombre'>{nombre}</span>
        <span className='cantidad'>{quantity}</span>
        <span className='precio'>{precio}</span>
        <div className='boton-eliminar'>&#10006;</div> 
    </div>
);

export default ItemVerCarrito;