import { Collections } from "shop-component-types";
import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
    collections: null
};

const shopReducer = (state: { collections: Collections | null } = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
          return {
            ...state,
            collections: action.payload
          }
        default:
          return state;
    }
};

export default shopReducer;