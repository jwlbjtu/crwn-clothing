declare module 'form-input-component-types' {
    
    import { HandleChangeFunctionType } from 'sign-in-component-types';

    export interface FormInputProps {
        handleChange: HandleChangeFunctionType,
        label?: string,
        name: string,
        type: string,
        value: string,
        required: boolean
    }
}