import { AnyAction } from 'redux';

import { CartState } from 'redux-root-types';

import { CartActionTypes } from './cart.types';
import addCartItem from './cart.utils';

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
        default:
            return state;
    }
}

export default cartReducer;