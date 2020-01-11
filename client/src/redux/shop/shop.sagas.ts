import { takeLatest, call, put } from 'redux-saga/effects';

import { ShopActionTypes } from './shop.types';
import { firestore, converCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { fetchCollectionsSuccess, fetchCollectionsFailed } from './shop.actions';

export function* fetchCollectionsAsync() {    
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(converCollectionsSnapshotToMap, snapshot);            
        yield put(fetchCollectionsSuccess(collectionMap));
    } catch (error) {
        yield put(fetchCollectionsFailed(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    );
}