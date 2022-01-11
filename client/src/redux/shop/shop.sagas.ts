import { takeLatest, call, put } from 'redux-saga/effects';

import { ShopActionTypes } from './shop.types';
import { firestore, converCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { fetchCollectionsSuccess, fetchCollectionsFailed } from './shop.actions';
import { collection, getDocs } from 'firebase/firestore';

export function* fetchCollectionsAsync(): any {    
    try {
        const collectionRef = collection(firestore, 'collections');
        const snapshot = yield getDocs(collectionRef);
        const collectionMap = yield call(converCollectionsSnapshotToMap, snapshot);            
        yield put(fetchCollectionsSuccess(collectionMap));
    } catch (error: any) {
        yield put(fetchCollectionsFailed(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    );
}