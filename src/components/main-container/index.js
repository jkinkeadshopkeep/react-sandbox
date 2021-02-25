import React from 'react';
import PropTypes from 'prop-types';
import styles from './stylesheets/index.module.scss';

const MainContainer = ({children}) => {
    return (<div className={styles['main-container']}>{children}</div>)
};

MainContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default MainContainer;