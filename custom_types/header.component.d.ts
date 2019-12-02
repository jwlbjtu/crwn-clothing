declare module 'header-component-types' {
    import firebase, { firebase } from 'firebase';

    export type HeaderBasicProps = {
        currentUser: firebase.User | null | undefined,
        hidden: boolean
    }

    export type HeaderProps = {
        signOutStart: () => {}
    } & HeaderBasicProps;
}