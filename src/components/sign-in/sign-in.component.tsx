import * as React from 'react';

import { SignInState, SignInProps } from 'sign-in-component-types';
import { HandleOnChangeFunctionType } from 'form-input-component-types';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.style.scss';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class SignIn extends React.Component<SignInProps, SignInState> {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.emailSignInStart({email, password});
  };

  handleChange: HandleOnChangeFunctionType = <K extends keyof SignInState>(
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    const newState = {
      [name]: value
    };
    this.setState(newState as { [P in K]: SignInState[P] });
  };

  render(): JSX.Element {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Please sign in with you email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton 
              type="button"
              onClick={this.props.googleSignInStart} 
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (credential: SignInState) => dispatch(emailSignInStart(credential))
});

export default connect(null, mapDispatchToProps)(SignIn);
