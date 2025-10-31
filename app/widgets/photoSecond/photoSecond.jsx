import React from 'react';
import Image from "next/image";
import styles from "./photo.module.scss";
const PhotoSecond = () => {
    return (
        <section className={styles.section}>
            <Image
                src="/sofia.png"
                alt="logo"
                fill
                style={{ objectFit: "cover" }}
            />
        </section>
    );
};

export default PhotoSecond;