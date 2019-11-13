import * as React from 'react';

import { SignInState } from 'sign-in-component-types';
import { HandleOnChangeFunctionType } from 'form-input-component-types';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.style.scss';

class SignIn extends React.Component<{}, SignInState> {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const {email, password} = this.state;
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    handleChange: HandleOnChangeFunctionType = <K extends keyof SignInState>(event: React.ChangeEvent<HTMLInputElement>):void => {
        const { name, value } = event.target;
        const newState = {
            [name]: value
        }
        this.setState(newState as { [P in K]: SignInState[P]; });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Please sign in with you email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>         
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>  
                    </div>         
                </form>
            </div>
        )
    }
}

export default SignIn;