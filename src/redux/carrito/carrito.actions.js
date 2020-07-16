import CarritoActionTypes from './carrito.types';

export const toggleCarritoHidden = () => ({
    type: CarritoActionTypes.TOGGLE_CARRITO_HIDDEN
});

export const addItem = item => ({
    type: CarritoActionTypes.ADD_ITEM,
    payload: item
});