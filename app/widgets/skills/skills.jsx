"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExperienceUi, SkillUi } from "@/app/shared";
import styles from "./skills.module.scss";

const Skills = () => {
    const skills = [
        { text: "Figma", ico: "figma" },
        { text: "Adobe Photoshop", ico: "ps" },
        { text: "Adobe Illustrator", ico: "il" },
        { text: "AI", ico: "ai" },
    ];

    const experiences = [
        {
            text: "Веду дизайн web и mobile интерфейсов для страховых продуктов, опираясь на метрики вовлеченности и конверсии.",
            title: "CберБизнес",
            time: "Апрель 2025 - н.в.",
        },
        {
            text: "Создавала цифровые продукты личных кабинетов для врачей и пациентов: от исследования до финальной реализации.",
            title: "Pacific.Studio",
            time: "Октябрь 2023 - Апрель 2025",
        },
        {
            text: "Разрабатывала UX паттерны для финтех-продукта.",
            title: "MOTKA",
            time: "Январь 2023 - Октябрь 2023",
        },
        {
            text: "Разрабатывала интерфейсы для стартапов: лендинги, многостраничные сайты и мобильные приложения.",
            title: "Независимый дизайнер",
            time: "Февраль 2022 - Январь 2023 ",
        },
    ];

    return (
        <section className={styles.section} id="skills">
            <motion.h1
                className={styles.h1}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                    duration: .3,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                Скиллы и Опыт
            </motion.h1>

            <div className={styles.content}>
                <motion.div
                    className={styles.skillsList}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.14 } },
                    }}
                >
                    {skills.map((value, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.3,
                                        ease: [0.34, 1.56, 0.64, 1],
                                    },
                                },
                            }}
                        >
                            <SkillUi text={value.text} ico={value.ico} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className={styles.ExpList}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.16, delayChildren: 0.25 },
                        },
                    }}
                >
                    {experiences.map((value, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.3,
                                        ease: [0.34, 1.56, 0.64, 1],
                                    },
                                },
                            }}
                        >
                            <ExperienceUi text={value.text} time={value.time} title={value.title} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;