"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./portfolio.module.scss";
import { BtnBlack } from "@/app/shared";

const Portfolio = () => {
    const data = [
        {
            object: 1,
            background: "./portfolio/1.svg",
            keys: ['WEB', 'Figma', 'Miro', 'NDA'],
            text: "СберБизнес. Страхование",
            label: "Веб интерфейс для страхования ММБ и КСБ"
        },
        {
            object: 2,
            background: "./portfolio/2.svg",
            keys: ['IOS', 'Figma', 'HGD'],
            text: "Личный кабинет пациента",
            label: "Приложение экосистемы ГК Олимп Клиник"
        },
        {
            object: 3,
            background: "./portfolio/3.svg",
            keys: ['IOS', 'Figma', 'HGD'],
            text: "Личный кабинет врача",
            label: "Приложение экосистемы ГК Олимп Клиник"
        },
        {
            object: 4,
            background: "./portfolio/4.svg",
            keys: ['WEB', 'Figma', 'Miro', 'NDA'],
            text: "Cargo1. Интерфейс грузоперевозок",
            label: "Личный кабинет для менеджера по грузоперевозкам"
        },
    ];

    return (
        <section className={styles.section} id="portfolio">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: .3, ease: [0.22, 1, 0.36, 1] }}
            >
                Продукты которые работают
            </motion.h1>

            <div className={styles.content}>
                {data.map((item, i) => {
                    const index = i + 1;
                    let className = styles.box;
                    if (index === 1) className += ` ${styles.wide}`;
                    else if ((index - 1) % 4 === 1 || (index - 1) % 4 === 2) className += ` ${styles.square}`;
                    else className += ` ${styles.wide}`;

                    const fromLeft = i % 2 === 0;

                    return (
                        <motion.div
                            key={i}
                            className={className}
                            initial={{
                                y: 50,
                            }}
                            whileInView={{
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                                margin: "-100px"
                            }}
                            transition={{
                                duration: .3,
                                ease: [0.34, 1.56, 0.64, 1],
                            }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.05, ease: "easeOut" }
                            }}
                            style={{
                                backgroundImage: `url(${item.background})`,
                                backgroundSize: "cover",
                                backgroundPosition: "top",
                            }}
                        >
                            <div className={styles.ContentUp}>
                                {item.keys.map((key, idx) => (
                                    <div
                                        key={idx}
                                        className={key === "NDA" ? styles.nda : styles.key}
                                    >
                                        {key}
                                    </div>
                                ))}
                            </div>
                            <div className={styles.contentDown}>
                                <h2>{item.text}</h2>
                                <p>{item.label}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 0.1,
                    ease: [0.34, 1.56, 0.64, 1],
                }}>
                <div className={styles.btnBox}>
                    <BtnBlack text="Больше работ" />
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;