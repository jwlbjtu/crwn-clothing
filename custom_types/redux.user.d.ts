declare module 'redux-user-types' {
    export interface UserState {
        currentUser: any
    }

    export interface RootState {
        user: UserState
    }
}