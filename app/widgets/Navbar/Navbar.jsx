'use client'
import React from 'react';
import styles from './navbar.module.scss'
import {BtnBlack, BtnNavBar} from "@/app/shared";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src="/logo.png"
                    alt="logo"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
                <div className={isOpen ? styles.active : ''}/>
            </div>

            <nav className={`${styles.nav} ${isOpen ? styles.activeNav : ''}`}>
                <BtnNavBar text={'Об о мне'} />
                <BtnNavBar text={'Портфолио'} />
                <BtnNavBar text={'Скиллы и опыт'} />
                <BtnBlack text={'СВЯЗАТЬСЯ'}/>
            </nav>
        </header>
    );
};

export default Navbar;
