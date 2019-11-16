declare module 'header-component-types' {
    import firebase, { firebase } from 'firebase';

    export type HeaderProps = {
        currentUser: firebase.User | null | undefined,
        hidden: boolean
    }
}