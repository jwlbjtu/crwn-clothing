declare module 'redux-root-types' {
    import { Item, CartItem } from 'shop-component-types';
    
    export interface UserState {
        currentUser: any
    }

    export interface CartState {
        hidden: boolean,
        cartItems: Array<CartItem>
    }

    export interface RootState {
        user: UserState,
        cart: CartState
    }
}