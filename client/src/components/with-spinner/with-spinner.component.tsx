import React from 'react';
import Spinner from '../spinner/spinner.component';

interface WithSpinnerProps {
    isLoading: boolean
};

const WithSpinner = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P & WithSpinnerProps> => 
    ({ isLoading, ...otherProps }: WithSpinnerProps) => (
        isLoading? (
            <Spinner />
        ) : (
            <WrappedComponent {...(otherProps as P)} />
        )
    ) 

export default WithSpinner;