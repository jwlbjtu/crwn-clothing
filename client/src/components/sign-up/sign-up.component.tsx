import React, { useState } from 'react';

import { SignUpState } from 'sign-up-component-types';
import { HandleOnChangeFunctionType } from 'form-input-component-types';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp : React.FC<{ signUpStart: (signUpInfo: SignUpState) => {} }> = ({signUpStart}) =>  {

  const [userCredential, setCredential] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange: HandleOnChangeFunctionType = <K extends keyof SignUpState>(
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setCredential({...userCredential, [name]: value});
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredential;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password, confirmPassword });
  };


  const { displayName, email, password, confirmPassword } = userCredential;
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with you email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signUpStart: (signUpInfo: SignUpState) => dispatch(signUpStart(signUpInfo))
});

export default connect(null, mapDispatchToProps)(SignUp);
