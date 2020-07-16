import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/carrito/carrito.actions';

import './item-coleccion.styles.scss';

const ItemColeccion = ({item, addItem}) => {
    const {nombre, precio, imagenUrl} = item;
    return(
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
        <CustomButton onClick={() => addItem(item)} inverted>Añadir a carrito</CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ItemColeccion);