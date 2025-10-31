import React from 'react';
import styles from './btn.module.scss'
const BtnBlack = ({text}) => {
    return (
        <button className={styles.btn}>
            {text}
        </button>
    );
};

export default BtnBlack;