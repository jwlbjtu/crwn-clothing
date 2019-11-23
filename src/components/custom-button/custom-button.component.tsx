import React from 'react';

import { CustomButtonProps } from 'custom-button-component-types';
import { CustomButtonContainer } from './custom-button.styles';

//import './custom-button.styles.scss';

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  ...props
}) => (
  <CustomButtonContainer className='custom-button' {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
