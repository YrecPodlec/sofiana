import React from 'react';
import styles from './welcome.module.scss'
import Image from "next/image";
const Welcome = () => {
    return (
        <section className={styles.section}>
            <span>
                💻Product дизайнер <br/> Создаю цифровые🌿 <br/> продукты экосистемы <br/> Сбера 📈 И не только
            </span>
        </section>
    );
};

export default Welcome;