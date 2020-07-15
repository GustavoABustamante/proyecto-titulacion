import CarritoActionTypes from './carrito.types';

const INITIAL_STATE = {
    hidden: true
};

const carritoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CarritoActionTypes.TOGGLE_CARRITO_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
};

export default carritoReducer;