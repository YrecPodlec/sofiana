"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./photo.module.scss";

const PhotoSecond = () => {
    return (
        <section className={styles.section}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
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