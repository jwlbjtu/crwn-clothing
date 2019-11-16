import { CartItem, Item } from 'shop-component-types';

export const addCartItem = (
  cartItems: Array<CartItem>,
  itemToAdd: Item
): Array<CartItem> => {
  const existingItem = cartItems.find(
    (item): boolean => item.id === itemToAdd.id
  );

  if (existingItem) {
    return cartItems.map(
      (item): CartItem =>
        item.id === itemToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeCartItem = (
  cartItems: Array<CartItem>,
  itemToRemove: Item
): Array<CartItem> => {
  const existingItem = cartItems.find(
    (item): boolean => item.id === itemToRemove.id
  );

  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
