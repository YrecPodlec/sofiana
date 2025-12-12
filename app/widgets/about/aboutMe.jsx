"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.scss";

const AboutMe = () => {
    return (
        <motion.section className={styles.section} id="about"
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.2 }}
                 transition={{
                     duration: .2,
                     ease: [0.22, 1, 0.36, 1],
                 }}>
            <h1>
                Обо мне за 10 секунд
            </h1>

            <div className={styles.content}>
                <span>
                    Привет!👋
                </span>
                <br />

                <p>
                    Я - Соня, Продуктовый дизайнер с опытом 3,5 года.
                </p>

                <br /><br />

                <p>
                    Я создаю цифровые интерфейсы, которые помогают бизнесу работать эффективнее, а людям — чувствовать
                    себя уверенно даже в самых сложных системах: <span>SSaaS, FinTech, B2B, B2C и MedTech.</span>
                </p>

                <br /><br />

                <span>
                    Люблю разбираться в сложном и делаю это быстро.
                </span>
            </div>
        </motion.section>
    );
};

export default AboutMe;