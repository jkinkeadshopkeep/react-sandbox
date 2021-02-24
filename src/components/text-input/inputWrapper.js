import React from 'react';
import PropTypes from 'prop-types';

const InputWrapper = ({id, label, children}) => (
    <>
        <label htmlFor={id}>
            {label}
        </label>
        {children}
        <br/>
    </>
);

InputWrapper.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

InputWrapper.defaultProps = {
    labelClassName: null
};

export default InputWrapper;
