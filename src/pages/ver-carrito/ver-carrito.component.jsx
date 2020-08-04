import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import ItemVerCarrito from '../../components/item-ver-carrito/item-ver-carrito.component';
import BotonStripeCheckout from '../../components/boton-stripe/boton-stripe.component';

import {selectItemsCarrito, selectTotalCarrito} from '../../redux/carrito/carrito.selectors';


import './ver-carrito.styles.scss';

const PaginaVerCarrito = ({itemsCarrito, total}) => {
    const formatoMonedaChilena = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    });
    return(
    <div className='pagina-carrito'>
        <div className='header-pagina-carrito'>
            <div className='header-block'>
                <span>PRODUCTO</span>
            </div>
            <div className='header-block'>
                <span>DESCRIPCION</span>
            </div>
            <div className='header-block'>
                <span>CANTIDAD</span>
            </div>
            <div className='header-block'>
                <span>PRECIO</span>
            </div>
            <div className='header-block'>
                <span>ELIMINAR</span>
            </div>
        </div>
        {
            itemsCarrito.map(itemCarrito =>
                (<ItemVerCarrito key={itemCarrito.id} itemCarrito={itemCarrito} />)
            )
        }
        <div className='total'>
            <span>TOTAL: {formatoMonedaChilena.format(total)}</span>
        </div>
        <BotonStripeCheckout precio={total} />
    </div>
)};

const mapStateToProps = createStructuredSelector({
    itemsCarrito: selectItemsCarrito,
    total: selectTotalCarrito
});

export default connect(mapStateToProps)(PaginaVerCarrito);