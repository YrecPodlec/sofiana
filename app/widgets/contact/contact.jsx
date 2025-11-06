import React from 'react';
import styles from './contact.module.scss'
import Image from "next/image";
import {BtnBlack} from "@/app/shared";
const Contact = () => {
    const data = [
        {title: 'Telegram', url: '@isofianna', ico: 'telegram'},
        {title: 'WhatsApp', url: '+7 (961) 972 07-67', ico: 'whatsapp'},
        {title: 'Почта', url: 'alyabevasofya@gmail.com', ico: 'mail'},
    ]
    return (
        <section className={styles.section}>
            <h1>Обсудить проект</h1>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>
                        Заполните форму или напишите мне в соцсетях -   я с радостью выйду на связь 👩‍💻 
                        <br/>
                        <span>
                            Обычно это около 24 часов, но бывает  и быстрее 🕒
                        </span>
                    </p>
                    <div className={styles.contacts}>
                        {data.map((item, index) => (
                            <div key={index} className={styles.boxContact}>
                                <p>{item.title}</p>
                                <div className={styles.ico}>
                                    <div className={styles.photo}>
                                        <Image
                                            src={"/" + item.ico + '.svg'}
                                            alt="logo"
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <span>{item.url}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.formSection}>
                    <form action="#" className={styles.form}>
                        <div className={styles.input}>
                            <label htmlFor="input">Ваше имя</label>
                            <input type="text" placeholder={'Как вас зовут'}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="input">Ваш email</label>
                            <input type={'email'} placeholder={'Ваш email'}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="input">Над чем будем работать?</label>
                            <textarea placeholder={'Коротко о вашем проекте'}/>
                        </div>
                        <BtnBlack text={'Отправить'} />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;