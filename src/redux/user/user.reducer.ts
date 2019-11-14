import { AnyAction } from 'redux';
import { UserActionTypes } from './user.types';

import { UserState } from 'redux-root-types';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state: UserState = INITIAL_STATE, action : AnyAction) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;