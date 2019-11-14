import React from 'react';

import { CustomButtonProps } from 'custom-button-component-types';

import './custom-button.styles.scss';


const CustomButton: React.FC<CustomButtonProps> = ({ children, isGoogleSignIn, inverted, ...otherButtonProps }) => (
    <button className={`
                ${inverted? 'inverted' : ''} 
                ${isGoogleSignIn? 'google-sign-in' : ''} 
                custom-button`} 
            {...otherButtonProps}
    >
        {children}
    </button>
)

export default CustomButton;