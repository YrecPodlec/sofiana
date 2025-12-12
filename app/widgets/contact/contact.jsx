"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
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
        { title: 'Telegram', url: '@isofianna', ico: 'telegram', href: "https://t.me/isofianna" },
        { title: 'WhatsApp', url: '+7 (961) 972 07-67', ico: 'whatsapp', href: "tel:+79619720767" },
        { title: 'Почта', url: 'alyabevasofya@gmail.com', ico: 'mail', href: "mailto:alyabevasofya@gmail.com" },
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
        <motion.section className={styles.section} id="call"
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.2 }}
                 transition={{
                     duration: .2,
                     ease: [0.22, 1, 0.36, 1]
                 }}>
            <h1>
                Обсудить проект
            </h1>

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
                            <div
                                key={index}
                                className={styles.boxContact}>
                                <p>{item.title}</p>
                                <a href={item.href} target="_blank" rel="noopener noreferrer">
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
                        {["name", "email", "project"].map((field, idx) => (
                            <div
                                key={field}
                                className={styles.input}>
                                <label>
                                    {field === "name" && "Ваше имя"}
                                    {field === "email" && "Ваш email"}
                                    {field === "project" && "Над чем будем работать?"}
                                </label>
                                {field !== "project" ? (
                                    <input
                                        type={field === "email" ? "email" : "text"}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        placeholder={field === "name" ? "Как вас зовут" : "Ваш email"}
                                        className={errors[field] ? styles.error : ''}
                                    />
                                ) : (
                                    <textarea
                                        name={field}
                                        value={formData.project}
                                        onChange={handleChange}
                                        placeholder="Коротко о вашем проекте"
                                        rows={4}
                                        className={errors.project ? styles.error : ''}
                                    />
                                )}
                                {errors[field] && <span className={styles.errorText}>{errors[field]}</span>}
                            </div>
                        ))}

                        <div>
                            <BtnBlack
                                text="Отправить"
                                type="submit"
                                disabled={!isValid}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;