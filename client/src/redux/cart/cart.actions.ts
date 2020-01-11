import { CartActionTypes } from './cart.types';
import { Item } from 'shop-component-types';
import { ActionType } from 'redux-root-types';

export const toggleCartHidden = (): ActionType => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: Item): ActionType => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item: Item): ActionType => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItem = (item: Item): ActionType => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item
});

export const clearCart = (): ActionType => ({
  type: CartActionTypes.CLEAR_CART
})