import { ShopActionTypes } from './shop.types';
import { Collections } from 'shop-component-types';
import { ThunkDispatch } from 'redux-thunk';
import { ShopState } from 'redux-root-types';
import { firestore, converCollectionsSnapshotToMap } from '../../firebase/firebase.util';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionsSuccess = (collectionMap: Collections) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsFailed = (error: any) => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILED,
    payload: error
});

export const fetchCollectionStartAsync = () => (
    (dispatch: ThunkDispatch<ShopState, undefined, any>) => {
        dispatch(fetchCollectionsStart());
        const collectionRef = firestore.collection('collections');
        collectionRef.get()
        .then(snapshot => {
          const collectionMap = converCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionMap));
        })
        .catch(error => {
            dispatch(fetchCollectionsFailed(error));
        });
    }
);