import { ShopActionTypes } from './shop.types';
import { Collections } from 'shop-component-types';

export const updateCollections = (collectionMap: Collections) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
});