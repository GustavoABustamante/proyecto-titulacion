import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import ItemVerCarrito from '../../components/item-ver-carrito/item-ver-carrito.component';
import BotonStripeCheckout from '../../components/boton-stripe/boton-stripe.component';

import {selectItemsCarrito, selectTotalCarrito} from '../../redux/carrito/carrito.selectors';
import {ReactComponent as IconoVisa} from '../../assets/visa.svg';

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
        {
            itemsCarrito.length ? 
            (<div className='container-total'>
                <div className='total'>
                <div className='tarjeta-prueba'>
                    <div className='contenido-tarjeta'>
                        <IconoVisa id='logo-visa' />
                        <h5 className='titulo-tarjeta'>Tarjeta de prueba</h5>
                        <h6>Card Number</h6>
                        <h5 className='numeros-tarjeta'>4242 4242 4242 4242</h5>
                        <h6>Expiration<span>CVC</span></h6>
                        <h5 className='numeros-tarjeta'>03 / 28<span>123</span></h5>
                    </div>
                    <div className='wave'></div>
                </div>
                    <span>TOTAL: {formatoMonedaChilena.format(total)}</span>
                </div>
            <BotonStripeCheckout precio={total} />
            </div>):(<h1>Carrito vacio</h1>)
        }
    </div>
)};

const mapStateToProps = createStructuredSelector({
    itemsCarrito: selectItemsCarrito,
    total: selectTotalCarrito
});

export default connect(mapStateToProps)(PaginaVerCarrito);