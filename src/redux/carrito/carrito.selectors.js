import {createSelector} from 'reselect';

const selectCarrito = state => state.carrito;

export const selectItemsCarrito = createSelector(
    [selectCarrito],
    (carrito) => carrito.itemsCarrito
);

export const selectCarritoHidden = createSelector(
    [selectCarrito],
    carrito => carrito.hidden
);

export const selectContadorItemsCarrito = createSelector(
    [selectItemsCarrito],
    itemsCarrito => itemsCarrito.reduce((cantidadAcumulada, itemCarrito) => cantidadAcumulada +  itemCarrito.quantity,0)
);

export const selectTotalCarrito = createSelector(
    [selectItemsCarrito],
    itemsCarrito => itemsCarrito.reduce((cantidadAcumulada, itemCarrito) => cantidadAcumulada +  itemCarrito.quantity * itemCarrito.precio,0)
)