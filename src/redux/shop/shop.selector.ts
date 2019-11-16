import { RootState, ShopState } from "redux-root-types";
import { createSelector } from "reselect";


const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop: ShopState) => shop.collections
);