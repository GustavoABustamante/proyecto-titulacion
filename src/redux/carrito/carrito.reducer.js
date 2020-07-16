import CarritoActionTypes from './carrito.types';
import {addItemToCarrito} from './carrito.utils';

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
            }
        case CarritoActionTypes.ADD_ITEM:
            return {
                ...state,
                itemsCarrito: addItemToCarrito(state.itemsCarrito, action.payload)
            };
        default:
            return state;
    }
};

export default carritoReducer;