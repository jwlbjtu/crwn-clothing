import { ShopActionTypes } from "./shop.types";
import { ShopState } from "redux-root-types";

const INITIAL_STATE = {
    collections: null,
    fetching: false,
    errorMessage: null
};

const shopReducer = (state: ShopState = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_COLLECTION_START:
          return {
            ...state,
            fetching: true
          }
        case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
          return {
            ...state,
            fetching: false,
            collections: action.payload
          }
        case ShopActionTypes.FETCH_COLLECTION_FAILED:
          return {
            ...state,
            fetching: false,
            errorMessage: action.payload
          }
        default:
          return state;
    }
};

export default shopReducer;