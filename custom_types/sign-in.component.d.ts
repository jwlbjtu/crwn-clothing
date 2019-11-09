declare module 'sign-in-component-types' {
    import React from 'react';

    export interface SignInState {
        email: string,
        password: string
    }

    export type HandleChangeFunctionType = <K extends keyof SignInState>(event: React.ChangeEvent<HTMLInputElement>) => void;
}