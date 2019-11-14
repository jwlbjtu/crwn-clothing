import { CartActionTypes } from './cart.types';
import { Item } from 'shop-component-types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: Item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});