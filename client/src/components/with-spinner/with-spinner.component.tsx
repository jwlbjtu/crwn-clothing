import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

interface WithSpinnerProps {
    isLoading: boolean
};

const WithSpinner = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P & WithSpinnerProps> => 
    ({ isLoading, ...otherProps }: WithSpinnerProps) => (
        isLoading? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...(otherProps as P)} />
        )
    ) 

export default WithSpinner;