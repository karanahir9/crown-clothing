import React from 'react';

import { Spinner } from '../spinner/spinner.component';

const withSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <Spinner/>
        ) : (
            <WrappedComponent {...otherProps}/> // This is how we pass the props to the wrapped component
        );
    };
};

export default withSpinner;