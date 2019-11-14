import { CartItem, Item } from 'shop-component-types';

const addCartItem = (cartItems: Array<CartItem>, itemToAdd: Item): Array<CartItem> => {
    const existingItem = cartItems.find((item): boolean => 
        item.id === itemToAdd.id
    );

    if(existingItem) {
        return cartItems.map((item): CartItem => 
            item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        )
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export default addCartItem;