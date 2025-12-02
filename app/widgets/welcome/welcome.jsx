"use client"
import React from 'react';
import styles from './welcome.module.scss'
import { motion } from "framer-motion";
const Welcome = () => {
    return (
        <section className={styles.section}>
            <motion.span
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                viewport={{
                    once: false,
                    amount: 0.2,
                    margin: "-10% 0% -10% 0%"
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeOut"
                }}
                className="show-on-scroll"
            >
                💻Product дизайнер <br/> Создаю цифровые🌿 <br/> продукты экосистемы <br/> Сбера 📈 И не только
            </motion.span>
        </section>
    );
};

export default Welcome;