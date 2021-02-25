import React from 'react';
import styles from './stylesheets/index.module.scss';

const InfoBox = () => {
    return (<div className={styles['info-box']}>
        <div>
            <h1>React sandbox</h1>
            <p>React sandbox for personal training of with react related tasks</p>
        </div>
        <div>
            <div>078 0192841</div>
            <div>reactsandbox@test.com</div>
            <div>992 Testing React Ave, TestWood, Testy McTestville</div>
        </div>
    </div>)
};

export default InfoBox;