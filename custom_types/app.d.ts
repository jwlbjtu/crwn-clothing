declare module 'app-types' {
    export interface AppProps {
        setCurrentUser: (user: any) => void,
        currentUser: any
    };
}