"use client"
import React, { useState } from 'react';
import styles from './contact.module.scss';
import Image from "next/image";
import { BtnBlack } from "@/app/shared";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        project: ''
    });

    const [isValid, setIsValid] = useState(false);

    const data = [
        { title: 'Telegram', url: '@isofianna', ico: 'telegram', href: "https://t.me/isofianna"},
        { title: 'WhatsApp', url: '+7 (961) 972 07-67', ico: 'whatsapp', href: "tel:+79619720767"},
        { title: 'Почта', url: 'alyabevasofya@gmail.com', ico: 'mail', href: "mailto:alyabevasofya@gmail.com"},
    ];

    const nameRegex = /^[А-ЯЁа-яё\s-]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validateForm = () => {
        let valid = true;
        const newErrors = { name: '', email: '', project: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'Введите ваше имя';
            valid = false;
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Имя слишком короткое';
            valid = false;
        } else if (!nameRegex.test(formData.name.trim())) {
            newErrors.name = 'Только кириллица, пробелы и дефис';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Введите email';
            valid = false;
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = 'Неверный формат email';
            valid = false;
        }

        if (!formData.project.trim()) {
            newErrors.project = 'Расскажите о проекте';
            valid = false;
        } else if (formData.project.trim().length < 10) {
            newErrors.project = 'Минимум 10 символов';
            valid = false;
        }

        setErrors(newErrors);
        setIsValid(valid);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Отправлено:', formData);
            alert('Спасибо! Скоро свяжусь с вами');
            setFormData({ name: '', email: '', project: '' });
            setIsValid(false);
        }
    };

    return (
        <section className={styles.section} id="call">
            <h1>Обсудить проект</h1>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>
                        Заполните форму или напишите мне в соцсетях - я с радостью выйду на связь
                        <br />
                        <span>
                            Обычно это около 24 часов, но бывает и быстрее
                        </span>
                    </p>
                    <div className={styles.contacts}>
                        {data.map((item, index) => (
                            <div key={index} className={styles.boxContact}>
                                <p>{item.title}</p>
                                <a href={item.href}>
                                    <div className={styles.ico}>
                                        <div className={styles.photo}>
                                            <Image
                                                src={"/" + item.ico + '.svg'}
                                                alt={item.title}
                                                fill
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                        <span>{item.url}</span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.formSection}>
                    <form onSubmit={handleSubmit} className={styles.form} noValidate>
                        <div className={styles.input}>
                            <label>Ваше имя</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Как вас зовут"
                                className={errors.name ? styles.error : ''}
                            />
                            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                        </div>

                        <div className={styles.input}>
                            <label>Ваш email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Ваш email"
                                className={errors.email ? styles.error : ''}
                            />
                            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                        </div>

                        <div className={styles.input}>
                            <label>Над чем будем работать?</label>
                            <textarea
                                name="project"
                                value={formData.project}
                                onChange={handleChange}
                                placeholder="Коротко о вашем проекте"
                                rows={4}
                                className={errors.project ? styles.error : ''}
                            />
                            {errors.project && <span className={styles.errorText}>{errors.project}</span>}
                        </div>

                        <BtnBlack
                            text="Отправить"
                            type="submit"
                            disabled={!isValid}
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;