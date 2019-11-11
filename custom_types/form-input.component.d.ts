declare module 'form-input-component-types' {
    import React from 'react';
    
    export type HandleOnChangeFunctionType = <K extends keyof T>(event: React.ChangeEvent<HTMLInputElement>) => void;

    export interface FormInputProps {
        handleChange: HandleChangeFunctionType,
        label?: string,
        name: string,
        type: string,
        value: string,
        required: boolean
    }
}