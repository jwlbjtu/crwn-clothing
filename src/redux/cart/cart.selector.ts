import { createSelector } from 'reselect';

import { RootState, CartState } from 'redux-root-types';
import { CartItem } from 'shop-component-types';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart: CartState) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart: CartState) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: Array<CartItem>) =>
    cartItems.reduce(
      (accumalator, cartItem) => accumalator + cartItem.quantity,
      0
    )
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems: Array<CartItem>) =>
    cartItems.reduce(
      (accumalator, cartItem) =>
        accumalator + cartItem.price * cartItem.quantity,
      0
    )
);
