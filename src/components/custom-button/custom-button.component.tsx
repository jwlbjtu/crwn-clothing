import React from 'react';

import { CustomButtonProps } from 'custom-button-component-types';

import './custom-button.styles.scss';

const CustomButton: React.FC<CustomButtonProps> = ({ children, isGoogleSignIn, ...otherButtonProps }) => (
    <button className={`${isGoogleSignIn? 'google-sign-in' : ''} custom-button`} {...otherButtonProps}>
        {children}
    </button>
)

export default CustomButton;