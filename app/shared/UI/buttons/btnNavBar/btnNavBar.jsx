import React from 'react';
import styles from './btn.module.scss';
const BtnNavBar = ({text}) => {
    return (
        <button className={styles.btn}>
            {text}
        </button>
    );
};

export default BtnNavBar;