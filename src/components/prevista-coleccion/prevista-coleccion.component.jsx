import React from 'react';
import ItemColeccion from '../item-coleccion/item-coleccion.component';

import './prevista-coleccion.styles.scss';

const PrevistaColeccion = ({titulo, items}) => (
    <div className='prevista-coleccion'>
        <h1 className='titulo'>{titulo.toUpperCase()}</h1>
        <div className='prevista'>
            {
                items.filter((item, index) => index < 4)
                .map(item =>(
                    <ItemColeccion key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
);

export default PrevistaColeccion;