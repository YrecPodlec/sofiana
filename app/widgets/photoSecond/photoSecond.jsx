"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./photo.module.scss";

const PhotoSecond = () => {
    const { scrollYProgress } = useScroll({
        offset: ["start end", "end start"], // начинается за экраном, заканчивается за экраном
    });

    // Картинка движется медленнее скролла → параллакс
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section className={styles.section}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                viewport={{
                    once: true,
                    amount: 0.3,
                    margin: "-10% 0% -10% 0%"
                }}
                transition={{
                    duration: .9,
                    ease: "easeOut"
                }}
                style={{ y }}
                className={styles.imageWrapper}
            >
                <Image
                    src="/sofia.svg"
                    alt="logo"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </motion.div>
        </section>
    );
};

export default PhotoSecond;