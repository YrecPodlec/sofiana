import React from 'react';
import styles from './experience.module.scss'
const ExperienceUi = ({time, title, text}) => {
    return (
        <div className={styles.expBlock}>
            <div className={styles.padding}>
                <div className={styles.title}>
                    <h2 className={styles.h2}>{time}</h2>
                    <h1 className={styles.h1}>{title}</h1>
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceUi;