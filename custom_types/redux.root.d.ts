declare module 'redux-root-types' {
    import { Item, CartItem, Collection } from 'shop-component-types';
    import { Section } from 'directory-component-types';
    
    export type UserState = {
        currentUser: any
    }

    export type CartState = {
        hidden: boolean,
        cartItems: Array<CartItem>
    }

    export type DirectoryState = {
        sections: Section[]
    }

    export type ShopState = {
        collections: Collection[]
    }

    export type RootState = {
        user: UserState,
        cart: CartState,
        directory: DirectoryState,
        shop: ShopState
    }

    export type ActionType = {
        type: string,
        payload?: any
    }
}