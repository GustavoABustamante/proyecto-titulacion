import CarritoActionTypes from './carrito.types';
import {addItemToCarrito, borrarItemDelCarrito} from './carrito.utils';

const INITIAL_STATE = {
    hidden: true,
    itemsCarrito: []
};

const carritoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CarritoActionTypes.TOGGLE_CARRITO_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CarritoActionTypes.BORRAR_ITEM:
            return {
                ...state,
                itemsCarrito: borrarItemDelCarrito(state.itemsCarrito, action.payload)
            };
        case CarritoActionTypes.ADD_ITEM:
            return {
                ...state,
                itemsCarrito: addItemToCarrito(state.itemsCarrito, action.payload)
            };
        case CarritoActionTypes.BORRAR_ITEM_DEL_CARRITO:
            return {
                ...state,
                itemsCarrito: state.itemsCarrito.filter(itemCarrito => itemCarrito.id !== action.payload.id)
            }
        default:
            return state;
    }
};

export default carritoReducer;