import {createSelector} from 'reselect';

const selectCarrito = state => state.carrito;

export const selectItemsCarrito = createSelector(
    [selectCarrito],
    (carrito) => carrito.itemsCarrito
);

export const selectContadorItemsCarrito = createSelector(
    [selectItemsCarrito],
    itemsCarrito => itemsCarrito.reduce((cantidadAcumulada, itemCarrito) => cantidadAcumulada +  itemCarrito.quantity,0)
);