import React from 'react';
import styles from './footer.module.scss';
import Image from "next/image";
import {BtnNavBar} from "@/app/shared";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoBlock}>
                <div className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="logo"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <div className={styles.p}>
                    <p>Дизайн: Софья Алябьева</p>
                    <p>Разрабока: Софья Алябьева</p>
                </div>
            </div>
            <div className={styles.nav}>
                <input type="text" placeholder={'🔍️ поиск по сайту'}/>
                <div className={styles.navBtns}>
                    <BtnNavBar text={'Об о мне'}/>
                    <BtnNavBar text={'Портфолио'}/>
                    <BtnNavBar text={'Скиллы'}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;