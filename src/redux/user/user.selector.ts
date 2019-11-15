import { RootState, UserState } from "redux-root-types";
import { createSelector } from "reselect";

export const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user: UserState) => user.currentUser
);