import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectArticulo = state => state.articulos;

export const selectColecciones = createSelector(
    [selectArticulo],
    articulos => articulos.colecciones
);

export const selectColeccionesPreVista = createSelector(
    [selectColecciones],
    colecciones => Object.keys(colecciones).map(key => colecciones[key])
);

export const selectColeccion = memoize(coleccionUrlParam => createSelector(
    [selectColecciones],
    colecciones => colecciones[coleccionUrlParam])
);