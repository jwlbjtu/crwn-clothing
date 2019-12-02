declare module 'sign-in-component-types' {
    export type SignInState = {
        email: string,
        password: string
    }

    export type SignInProps = {
        googleSignInStart: ()=> {},
        emailSignInStart: (cretential: SignInState) => {}
    }
}