import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './spinner.styles';

const Spinner : React.FC = () => (
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
);

export default Spinner;