import { AnyAction } from 'redux';

import { CartState } from 'redux-root-types';

import { CartActionTypes } from './cart.types';
import { addCartItem, removeCartItem } from './cart.utils';
import { isTerminatorless } from '@babel/types';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state: CartState = INITIAL_STATE, action: AnyAction) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cartReducer;