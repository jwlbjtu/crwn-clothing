import { ShopActionTypes } from './shop.types';
import { Collections } from 'shop-component-types';

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