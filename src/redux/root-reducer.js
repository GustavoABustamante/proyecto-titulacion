import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import carritoReducer from './carrito/carrito.reducer';

export default combineReducers({
    user: userReducer,
    carrito: carritoReducer
});