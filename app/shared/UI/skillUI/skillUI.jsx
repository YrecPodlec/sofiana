import React from 'react';
import styles from './skillUI.module.scss'
import Image from "next/image";
const SkillUi = ({text, ico}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.ico}>
                <Image
                    src={`/${ico}.svg`}
                    alt="logo"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
            {text}
        </div>
    );
};

export default SkillUi;