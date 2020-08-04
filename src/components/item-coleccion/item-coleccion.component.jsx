import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/carrito/carrito.actions';

import './item-coleccion.styles.scss';

const ItemColeccion = ({item, addItem}) => {
    const {nombre, precio, imagenUrl} = item;
    const formatoMonedaChilena = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    });
    return(
    <div className='item-coleccion'>
        <div className='imagen'>
            <img src={imagenUrl} alt="Item"/>
        </div>
        
        <div className='footer-coleccion'>
            <div className="tallas">
                <h3>Tallas :</h3>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
            </div>
            <h2 className='nombre'>{nombre}</h2>
            <h1 className='precio'>{formatoMonedaChilena.format(precio)}</h1>
            <CustomButton onClick={() => addItem(item)} btnAddItem >Añadir a carrito</CustomButton>
        </div>
        
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ItemColeccion);