import * as React from 'react';

import { SignInState, HandleChangeFunctionType } from 'sign-in-component-types';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.style.scss';

class SignIn extends React.Component<{}, SignInState> {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange: HandleChangeFunctionType = <K extends keyof SignInState>(event: React.ChangeEvent<HTMLInputElement>):void => {
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
                    <CustomButton type="submit"> Sign in </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;