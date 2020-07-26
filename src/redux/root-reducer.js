import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import carritoReducer from './carrito/carrito.reducer';
import menuPrincipalReducer from './menu-principal/menu-principal.reducer';
import articulosReducer from './articulos/articulos.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['carrito']
}

const rootReducer = combineReducers({
    user: userReducer,
    carrito: carritoReducer,
    menuPrincipal: menuPrincipalReducer,
    articulos: articulosReducer
});

export default persistReducer(persistConfig, rootReducer);