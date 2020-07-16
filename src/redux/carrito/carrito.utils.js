export const addItemToCarrito = (itemsCarrito, carritoItemToAdd) => {
    const existingCarritoItem = itemsCarrito.find(itemCarrito => itemCarrito.id === carritoItemToAdd.id);

    if (existingCarritoItem) {
        return itemsCarrito.map(itemCarrito =>
            itemCarrito.id === carritoItemToAdd.id ? {...itemCarrito, quantity: itemCarrito.quantity + 1} : itemCarrito
            );
    }

    return [...itemsCarrito, {...carritoItemToAdd, quantity:1}];
};