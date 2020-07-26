import DATA_ARTICULOS from './articulos.data';

const INITIAL_STATE = {
    colecciones: DATA_ARTICULOS
};

const articulosReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default articulosReducer;