import { UserActionTypes } from './user.types';
import { ActionType } from 'redux-root-types';
import { SignInState } from 'sign-in-component-types';
import { SignUpState } from 'sign-up-component-types';

export const setCurrentUser = (user: any): ActionType => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (credential: SignInState) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: credential
});

export const signInSuccess = (user: any): ActionType => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = (error: any): ActionType => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error: any) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const signUpStart = (signUpInfo: SignUpState) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: signUpInfo
});

export const signUpSuccess = (signUpSeccessObj : { user: firebase.User, additionalData: { [key: string]: any }}) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: signUpSeccessObj
});

export const signUpFailure = (error: any) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});
