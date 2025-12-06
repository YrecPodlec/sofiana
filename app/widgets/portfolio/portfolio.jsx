"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./portfolio.module.scss";
import { BtnBlack } from "@/app/shared";

const Portfolio = () => {
    const [type, setType] = React.useState("все");

    const data = [
        {
            object: 1,
            background: "./portfolio/1.svg",
            keys: ["WEB", "Figma", "Miro", "NDA"],
            text: "СберБизнес. Страхование",
            label: "Веб интерфейс для страхования ММБ и КСБ",
            type: "интерфейс"
        },
        {
            object: 2,
            background: "./portfolio/2.svg",
            keys: ["IOS", "Figma", "HGD"],
            text: "Личный кабинет пациента",
            label: "Приложение экосистемы ГК Олимп Клиник",
            type: "приложение"
        },
        {
            object: 3,
            background: "./portfolio/3.svg",
            keys: ["IOS", "Figma", "HGD"],
            text: "Личный кабинет врача",
            label: "Приложение экосистемы ГК Олимп Клиник",
            type: "приложение"
        },
        {
            object: 4,
            background: "./portfolio/4.svg",
            keys: ["WEB", "Figma", "Miro", "NDA"],
            text: "Cargo1. Интерфейс грузоперевозок",
            label: "Личный кабинет для менеджера по грузоперевозкам",
            type: "интерфейс"
        },
    ];
    const filteredData = type === "все"
        ? data
        : data.filter(item => item.type === type);

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

            <div className={styles.filters}>
                <button
                    className={`${styles.filterBtn} ${type === "интерфейс" ? styles.active : ""}`}
                    onClick={() => setType("интерфейс")}
                >
                    ИНТЕРФЕЙС
                </button>
                <button
                    className={`${styles.filterBtn} ${type === "приложение" ? styles.active : ""}`}
                    onClick={() => setType("приложение")}
                >
                    ПРИЛОЖЕНИЕ
                </button>
                <button
                    className={`${styles.filterBtn} ${type === "все" ? styles.active : ""}`}
                    onClick={() => setType("все")}
                >
                    ВСЕ
                </button>
            </div>

            <div className={styles.content}>
                {filteredData.map((item, i) => {
                    const index = data.indexOf(item) + 1;
                    let className = styles.box;
                    if (index === 1) className += ` ${styles.wide}`;
                    else if ((index - 1) % 4 === 1 || (index - 1) % 4 === 2) className += ` ${styles.square}`;
                    else className += ` ${styles.wide}`;

                    return (
                        <motion.div
                            key={item.object || i}
                            className={className}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                            transition={{
                                duration: .4,
                                ease: [0.34, 1.56, 0.64, 1],
                                delay: i * 0.1
                            }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
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
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
                <div className={styles.btnBox}>
                    <BtnBlack text="Больше работ" />
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;