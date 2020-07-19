import CarritoActionTypes from './carrito.types';

export const toggleCarritoHidden = () => ({
    type: CarritoActionTypes.TOGGLE_CARRITO_HIDDEN
});

export const addItem = item => ({
    type: CarritoActionTypes.ADD_ITEM,
    payload: item
});

export const borrarItem = item => ({
    type: CarritoActionTypes.BORRAR_ITEM,
    payload: item
});

export const borrarItemDelCarrito = item => ({
    type: CarritoActionTypes.BORRAR_ITEM_DEL_CARRITO,
    payload: item
});