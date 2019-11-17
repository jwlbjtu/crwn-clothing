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
    (collections: Collections) => Object.keys(collections)
                                    .map((key: string) => collections[key])
);

export const selectCollection = (collectionId: string) => createSelector(
    [selectCollections],
    (collections: Collections) => collections[collectionId]
);