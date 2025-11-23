import React from 'react';
import styles from './about.module.scss'
const AboutMe = () => {
    return (
        <section className={styles.section} id='about'>
            <h1>Обо мне за 10 секунд</h1>
            <div className={styles.content}>
                <span>Привет!👋</span><br/>
                <p>Я - Соня, Продуктовый дизайнер с опытом 3,5 года.</p>
                <br/>
                <br/>
                <p>Я создаю цифровые интерфейсы, которые помогают бизнесу работать эффективнее, а людям — чувствовать
                    себя уверенно даже в самых сложных системах: <span>SaaS, FinTech, B2B, B2C и MedTech.</span></p>
                <br/>
                <br/>
                <span>Люблю разбираться в сложном и делаю это быстро.</span>
            </div>
        </section>
    );
};

export default AboutMe;