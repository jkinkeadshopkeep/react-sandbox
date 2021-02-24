import React from 'react';
import PropTypes from 'prop-types';
import './stylesheets/index.module.scss';

const Button = ({children, type, ...rest}) => {
    return (<button type={type} {...rest}>{children}</button>)
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string
};

Button.defaultProps = {
    type: 'button'
};

export default Button;