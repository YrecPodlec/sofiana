import React from 'react';
import {ExperienceUi, SkillUi} from "@/app/shared";
import styles from './skills.module.scss'
const Skills = () => {
    const skills = [
        {text:'Figma', ico: 'figma'},
        {text:'Adobe Photoshop', ico: 'ps'},
        {text:'Adobe Illustrator', ico: 'il'},
        {text:'AI', ico: 'ai'}
    ]
    const experiences = [
        {text:'Веду дизайн web и mobile интерфейсов для страховых продуктов, опираясь на метрики вовлеченности и конверсии.', title:'CберБизнес', time:'Апрель 2025 - н.в.'},
        {text:'Создавала цифровые продукты личных кабинетов для врачей  и пациентов: от исследования до финальной реализации.', title:'Pacific.Studio', time:'АОктябрь 2023 - Апрель 2025'},
        {text:'Разрабатывала UX паттерны для финтех-продукта.', title:'MOTKA', time:'Январь 2023 - Октябрь 2023'},
        {text:'Разрабатывала интерфейсы для стартапов: лендинги, многостраничные сайты и мобильные приложения.', title:'Независимый дизайнер', time:'Февраль 2022 - Январь 2023 '},
    ]
    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>Скиллы и Опыт</h1>
            <div className={styles.content}>
                <div className={styles.skillsList}>
                    {
                        skills.map((value, index) => <div key={index}><SkillUi text={value.text} ico={value.ico}/></div>)
                    }
                </div>
                <div className={styles.ExpList}>
                    {
                        experiences.map((value, index) =>
                            <div key={index}>
                                <ExperienceUi text={value.text} time={value.time} title={value.title}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;