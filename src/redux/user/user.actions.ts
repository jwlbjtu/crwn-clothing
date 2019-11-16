import { UserActionTypes } from './user.types';
import { ActionType } from 'redux-root-types';

export const setCurrentUser = (user: any): ActionType => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
