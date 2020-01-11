import { takeLatest, all, call, put } from 'redux-saga/effects';
import { UserActionTypes } from '../user/user.types';
import { clearCart } from './cart.actions';

function* clearCartForSignOut() {
    yield put(clearCart());
}

export function* onSignOutStart() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        clearCartForSignOut
    )
}

export function* cartSaga() {
    yield all([
        call(onSignOutStart)
    ])
};