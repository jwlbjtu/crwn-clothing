import { AnyAction } from 'redux';
import { UserActionTypes } from './user.types';

import { UserState } from 'redux-root-types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (
  state: UserState = INITIAL_STATE,
  action: AnyAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    default:
      return state;
  }
};

export default userReducer;
