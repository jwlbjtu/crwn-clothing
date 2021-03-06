import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signin-register.style.scss';

const SigninRegisterPage: React.FC = () => (
  <div className="sign-in-and-register">
    <SignIn />
    <SignUp />
  </div>
);

export default SigninRegisterPage;
