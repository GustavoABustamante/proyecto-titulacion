import React from 'react';
import './item-menu.styles.scss';

const ItemMenu = ({titulo, imagenUrl, tamanho}) => (
    <div className={`${tamanho} item-menu`}>
        <div className='imagen-fondo'
        style={{
            backgroundImage: `url(${imagenUrl})`
        }} />
        <div className='contenido'>
            <h1 className='titulo'>{titulo.toUpperCase()}</h1>
            <span className='subtitulo'>COMPRA AHORA</span>
        </div>
    </div>
);

export default ItemMenu;