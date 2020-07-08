import React from 'react';

import './item-coleccion.styles.scss';

const ItemColeccion = ({id, nombre, precio, imagenUrl}) => (
    <div className='item-coleccion'>
        <div className='imagen'
        style={{
            backgroundImage: `url(${imagenUrl})`
        }}
        />
        <div className='footer-coleccion'>
            <span className='nombre'>{nombre}</span>
            <span className='precio'>{precio}</span>
        </div>
    </div>
);

export default ItemColeccion;