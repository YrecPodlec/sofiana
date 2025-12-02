"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.scss";

const AboutMe = () => {
    return (
        <section className={styles.section} id="about">
            <motion.h1
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                Обо мне за 10 секунд
            </motion.h1>

            <motion.div
                className={styles.content}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ once: false, amount: 0.3, margin: "-100px" }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.18,
                        },
                    },
                }}
            >
                <motion.span
                    variants={{
                        hidden: { opacity: 0, y: 60 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.9,
                                ease: [0.34, 1.56, 0.64, 1],
                            },
                        },
                    }}
                >
                    Привет!👋
                </motion.span>
                <br />

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 60 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.9,
                                ease: [0.34, 1.56, 0.64, 1],
                            },
                        },
                    }}
                >
                    Я - Соня, Продуктовый дизайнер с опытом 3,5 года.
                </motion.p>

                <br /><br />

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 60 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.9,
                                ease: [0.34, 1.56, 0.64, 1],
                            },
                        },
                    }}
                >
                    Я создаю цифровые интерфейсы, которые помогают бизнесу работать эффективнее, а людям — чувствовать
                    себя уверенно даже в самых сложных системах: <span>SSaaS, FinTech, B2B, B2C и MedTech.</span>
                </motion.p>

                <br /><br />

                <motion.span
                    variants={{
                        hidden: { opacity: 0, y: 60 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.9,
                                ease: [0.34, 1.56, 0.64, 1],
                            },
                        },
                    }}
                >
                    Люблю разбираться в сложном и делаю это быстро.
                </motion.span>
            </motion.div>
        </section>
    );
};

export default AboutMe;