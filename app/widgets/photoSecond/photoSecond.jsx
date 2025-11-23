import React from 'react';
import Image from "next/image";
import styles from "./photo.module.scss";
const PhotoSecond = () => {
    return (
        <section className={styles.section}>
            <div>
                <Image
                    src="/sofia.svg"
                    alt="logo"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
        </section>
    );
};

export default PhotoSecond;