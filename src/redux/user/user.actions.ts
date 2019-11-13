import { userActionTypes } from './user.types';

export const setCurrentUser = (user: any) => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})