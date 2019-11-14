declare module 'header-component-types' {
    import firebase, { firebase } from 'firebase';

    export interface HeaderProps {
        currentUser: firebase.User | null | undefined,
        hidden: boolean
    }
}