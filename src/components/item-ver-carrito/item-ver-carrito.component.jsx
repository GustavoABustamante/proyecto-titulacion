import React from 'react';
import {connect} from 'react-redux';
import {borrarItemDelCarrito, addItem, borrarItem} from '../../redux/carrito/carrito.actions';
import './item-ver-carrito.styles.scss';

const ItemVerCarrito = ({itemCarrito, borrarItem, addItem, restarItem}) => {
    const {nombre, imagenUrl, quantity, precio} = itemCarrito;
    const formatoMonedaChilena = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    });
    return (
    <div className='item-ver-carrito'>
        <div className='contenedor-imagen'>
            <img src={imagenUrl} alt='item carrito' />
        </div>
        <span className='nombre'>{nombre}</span>
        <span className='cantidad'>
            <div className='flecha' onClick={() => restarItem(itemCarrito)}>&#10094;</div>
            <span className='valor'>{quantity}</span>
            <div className='flecha' onClick={() => addItem(itemCarrito)}>&#10095;</div>
            </span>
        <span className='precio'>{formatoMonedaChilena.format(precio)}</span>
        <div className='boton-eliminar' onClick={() => borrarItem(itemCarrito)}>&#10006;</div> 
    </div>
)};

const mapDispatchToProps = dispatch => ({
    borrarItem: item => dispatch(borrarItemDelCarrito(item)),
    addItem: item => dispatch(addItem(item)),
    restarItem: item => dispatch(borrarItem(item)) 
});

export default connect(null, mapDispatchToProps)(ItemVerCarrito);