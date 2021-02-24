import React from 'react';
import PropTypes from 'prop-types';
import TextWrapper from "./inputWrapper";
import './stylesheets/index.module.scss';

const TextInput = ({type, name, label, ...rest}) => {
    return (
        <TextWrapper label={label} id={name}>
            <input type={type} name={name} {...rest}/>
        </TextWrapper>
    )
};

TextInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', 'tel'])
};

TextInput.defaultProps = {
    type: 'text',
    name: null,
    label: null
};

export default TextInput;