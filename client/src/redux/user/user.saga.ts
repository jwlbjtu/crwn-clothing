import { takeLatest, call, all, put } from 'redux-saga/effects';
import { UserActionTypes } from '../user/user.types';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.util';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from '../user/user.actions';
import { AnyAction } from 'redux';

function* getSnapShotFromUserAuth(userAuth: firebase.User, additionalData: { [key: string]: any}) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signInWithGoogle() {
    try{
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user, {});
    } catch(error) {
        yield put(signInFailure(error));
    }
};

function* signInWithEamilAndPassword({ payload: { email, password } }: AnyAction) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user, {});
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* isCurrentUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth, {});
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* handleSignOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
};

function* handleSignUp({ payload: { email, password, displayName } }: AnyAction) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch (error) {
        yield put(signUpFailure(error));
    }
};

function* signInAfterSignUpSuccess({ payload: { user, additionalData } }: AnyAction) {
    yield getSnapShotFromUserAuth(user, additionalData);
}

/**
 *  User Saga Activity Listeners
 */

export function* onGoogleSignInStart() {
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START, 
        signInWithGoogle
    );
};

export function* onEmailSignInStart() {
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        signInWithEamilAndPassword
    )
};

export function* onCheckUserSession() {
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION,
        isCurrentUserAuthenticated
    )
};

export function* onSignOutStart() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        handleSignOut
    )
};

export function* onSignUpStart() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_START,
        handleSignUp
    )
};

export function* onSignUpSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_SUCCESS,
        signInAfterSignUpSuccess
    )
}

export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
};