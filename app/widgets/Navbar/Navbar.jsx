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
                <a href="#about">
                    <BtnNavBar text={'Об о мне'} />
                </a>
                <a href="#portfolio">
                    <BtnNavBar text={'Портфолио'} />
                </a>
                <a href="#skills">
                    <BtnNavBar text={'Скиллы и опыт'} />
                </a>
                <a href="#call">
                    <BtnBlack text={'СВЯЗАТЬСЯ'}/>
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
