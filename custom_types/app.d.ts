declare module 'app-types' {
    export type AppProps = {
        setCurrentUser: (user: any) => void,
        currentUser: any
    };
}