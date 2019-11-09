import React from 'react';

import { CustomButtonProps } from 'custom-button-component-types';

import './custom-button.styles.scss';

const CustomButton: React.FC<CustomButtonProps> = ({ children, type }) => (
    <button className='custom-button' type={type}>
        {children}
    </button>
)

export default CustomButton;