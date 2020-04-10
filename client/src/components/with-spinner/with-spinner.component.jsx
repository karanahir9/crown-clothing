import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const withSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/> // This is how we pass the props to the wrapped component
        );
    };
    return Spinner;
};

export default withSpinner;