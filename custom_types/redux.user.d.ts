declare module 'redux-user-types' {
    export interface UserState {
        currentUser: any
    }

    export interface CartState {
        hidden: boolean
    }

    export interface RootState {
        user: UserState,
        cart: CartState
    }
}