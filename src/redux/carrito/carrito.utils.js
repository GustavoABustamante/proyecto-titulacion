export const addItemToCarrito = (itemsCarrito, carritoItemToAdd) => {
    const existingCarritoItem = itemsCarrito.find(itemCarrito => itemCarrito.id === carritoItemToAdd.id);

    if (existingCarritoItem) {
        return itemsCarrito.map(itemCarrito =>
            itemCarrito.id === carritoItemToAdd.id ? {...itemCarrito, quantity: itemCarrito.quantity + 1} : itemCarrito
            );
    }

    return [...itemsCarrito, {...carritoItemToAdd, quantity:1}];
};

export const borrarItemDelCarrito = (itemsCarrito, itemBorradoDelCarrito) => {
    const existingCarritoItem = itemsCarrito.find(
        itemCarrito => itemCarrito.id === itemBorradoDelCarrito.id
    );

    if (existingCarritoItem.quantity === 1){
        return itemsCarrito.filter(itemCarrito => itemCarrito.id !== itemBorradoDelCarrito.id);
    }

    return itemsCarrito.map(itemCarrito =>
        itemCarrito.id === itemBorradoDelCarrito.id ? {...itemCarrito, quantity: itemCarrito.quantity -1} : itemCarrito
    );
};