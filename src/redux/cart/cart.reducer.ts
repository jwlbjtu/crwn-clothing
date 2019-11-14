import { AnyAction } from 'redux';

import { CartState } from 'redux-cart-types';

import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state: CartState = INITIAL_STATE, action: AnyAction) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;