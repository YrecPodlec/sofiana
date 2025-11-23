import React from 'react';
import styles from './portfolio.module.scss'
import {BtnBlack} from "@/app/shared";
const Portfolio = () => {
    const data = [
        {
            object: 1,
            background: "./portfolio/1.svg",
            keys: [
                'WEB',
                'Figma',
                'Miro',
                'NDA',
            ],
            text: "СберБизнес. Страхование",
            label: "Веб интерфейс для страхования ММБ и КСБ"
        },
        {
            object: 2,
            background: "./portfolio/2.svg",
            keys: [
                'IOS',
                'Figma',
                'HGD',
            ],
            text: "Личный кабинет пациента",
            label: "Приложение экосистемы ГК Олимп Клиник"
        },
        {
            object: 3,
            background: "./portfolio/3.svg",
            keys: [
                'IOS',
                'Figma',
                'HGD',
            ],
            text: "Личный кабинет врача",
            label: "Приложение экосистемы ГК Олимп Клиник"
        },
        {
            object: 4,
            background: "./portfolio/4.svg",
            keys: [
                'WEB',
                'Figma',
                'Miro',
                'NDA',
            ],
            text: "Cargo1. Интерфейс грузоперевозок",
            label: "Личный кабинет для менеджера по грузоперевозкам"
        },
    ]
    return (
        <section className={styles.section} id='portfolio'>
            <h1>Продукты которые работают</h1>
            <div className={styles.content}>
                {data.map((item, i) => {
                    const index = i + 1;
                    let className = styles.box;
                    if (index === 1) {
                        className += ` ${styles.wide}`;
                    } else if ((index - 1) % 4 === 1 || (index - 1) % 4 === 2) {
                        className += ` ${styles.square}`;
                    } else {
                        className += ` ${styles.wide}`;
                    }
                    return <div key={i} className={className}
                                style={{
                                    backgroundImage: `url(${item.background})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'top',
                                }}>
                        <div className={styles.ContentUp}>
                            {item.keys.map((key, index) => <div key={index} className={key === 'NDA' ? styles.nda : styles.key}>{key}</div>)}
                        </div>
                        <div className={styles.contentDown}>
                            <h2>{item.text}</h2>
                            <p>{item.label}</p>
                        </div>
                    </div>;
                })}
            </div>
            <BtnBlack text={'Больше работ'}/>
        </section>
    );
};

export default Portfolio;