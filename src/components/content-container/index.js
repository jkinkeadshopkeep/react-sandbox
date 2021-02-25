import React from 'react';
import PropTypes from 'prop-types';
import styles from './stylesheets/index.module.scss';

const ContentContainer = ({children}) => {
    return (<div className={styles['content-container']}>{children}</div>)
};

ContentContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default ContentContainer;