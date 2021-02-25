import React from 'react';
import PropTypes from 'prop-types';
import styles from './stylesheets/index.module.scss';

const Form = ({children, id, ...rest}) => {
    return (
        <form id={id} className={styles['form-box']} {...rest}>
            {children}
        </form>
    )
};

Form.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string
};

Form.defaultProps = {
    type: 'button'
};

export default Form;