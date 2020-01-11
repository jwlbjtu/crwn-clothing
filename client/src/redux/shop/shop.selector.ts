import { RootState, ShopState } from "redux-root-types";
import { createSelector } from "reselect";
import { Collections } from "shop-component-types";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop: ShopState) => shop.collections
);

export const selectCollectionPreview = createSelector(
    [selectCollections],
    (collections: Collections | null) => collections? 
                                        Object.keys(collections).map((key: string) => collections[key]):
                                        null
);

export const selectCollection = (collectionId: string) => createSelector(
    [selectCollections],
    (collections: Collections | null) => collections ? collections[collectionId] : null
);

export const selectFetching = createSelector(
    [selectShop],
    (shop: ShopState) => shop.fetching
)