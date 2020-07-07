import React from 'react';
import {withRouter} from 'react-router-dom';
import './item-menu.styles.scss';

const ItemMenu = ({titulo, imagenUrl, tamanho, history, linkUrl, match}) => (
    <div className={`${tamanho} item-menu`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='imagen-fondo'
        style={{
            backgroundImage: `url(${imagenUrl})`
        }} />
        <div className='contenido'>
            <h1 className='titulo'>{titulo.toUpperCase()}</h1>
            <span className='subtitulo'>COMPRAR AHORA</span>
        </div>
    </div>
);

export default withRouter(ItemMenu);