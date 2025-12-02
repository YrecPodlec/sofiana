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
        <section className={styles.section} id="call">
            <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                    duration: .3,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                Обсудить проект
            </motion.h1>

            <div className={styles.container}>
                <motion.div
                    className={styles.text}
                    initial={{ opacity: 0, x: -350 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3, margin: "-100px" }}
                    transition={{
                        duration: .3,
                        ease: [0.34, 1.56, 0.64, 1],
                    }}
                >
                    <p>
                        Заполните форму или напишите мне в соцсетях - я с радостью выйду на связь
                        <br />
                        <span>
                            Обычно это около 24 часов, но бывает и быстрее
                        </span>
                    </p>

                    <motion.div
                        className={styles.contacts}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.18 }
                            }
                        }}
                    >
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.boxContact}
                                variants={{
                                    hidden: { opacity: 0, y: 100 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.3,
                                            ease: [0.34, 1.56, 0.64, 1]
                                        }
                                    }
                                }}
                                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            >
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
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.formSection}
                    initial={{ opacity: 0, x: 350 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3, margin: "-100px" }}
                    transition={{
                        duration: .3,
                        ease: [0.34, 1.56, 0.64, 1]
                    }}
                >
                    <form onSubmit={handleSubmit} className={styles.form} noValidate>
                        {["name", "email", "project"].map((field, idx) => (
                            <motion.div
                                key={field}
                                className={styles.input}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{
                                    delay: 0.3 + idx * 0.2,
                                    duration: 0.3,
                                    ease: "easeOut"
                                }}
                            >
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
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 0.3,
                                ease: [0.34, 1.56, 0.64, 1]
                            }}
                        >
                            <BtnBlack
                                text="Отправить"
                                type="submit"
                                disabled={!isValid}
                            />
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;