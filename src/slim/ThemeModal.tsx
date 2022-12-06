'use client';
import React, {useCallback, useEffect, useState} from 'react';
import styles from "../../styles/slim/design/components/ThemeModal.module.scss";
import SwitchBox from "../slim/components/inputs/SwitchBox";
import FilledButton from "../slim/components/buttons/FilledButton";
import {IoMdCloseCircle} from "react-icons/io";

const strings = {
    en: {
        title: "Settings!",
        mode: "Mode",
        friendly: "Friendly",
        standard: "Standard",
        serious: "Serious",
        darkMode: "Dark Mode",
        tint: "Tint",
        fontSize: "Font Size",
        small: "Small",
        medium: "Medium",
        large: "Large!",
        language: "Language"
    },
    fa: {
        title: "تنظیمات!",
        mode: "حالت",
        friendly: "دوستانه",
        standard: "عادی",
        serious: "جدی!",
        darkMode: "حالت تاریک",
        tint: "رنگ",
        fontSize: "اندازه متن",
        small: "کوچک",
        medium: "عادی",
        large: "بزرگ!",
        language: "زبان"
    },
}

function ThemeModal({en = false}: { en?: boolean }) {
    const locale_strings = strings[en ? "en" : "fa"];
    const [windowWidth, setWindowWidth] = useState(0);
    const [design, setDesignState] = useState(
        typeof window == "undefined" ? 'apple' : window.localStorage.getItem('design'
        ));
    const [fontSize, setFontSizeState] = useState(
        typeof window == "undefined" ? 'medium' : window.localStorage.getItem('font-size'
        ));
    const setFontSize = useCallback((v: string) => {
        if (typeof document == "undefined") {
            return
        }
        const smallBtn = document.getElementById("theme-modal-font-size-small");
        const mediumBtn = document.getElementById("theme-modal-font-size-medium");
        const largeBtn = document.getElementById("theme-modal-font-size-large");
        if (typeof window == "undefined" || smallBtn == null || mediumBtn == null || largeBtn == null) {
            return () => {
            }
        }
        return () => {
            setFontSizeState(v);
            smallBtn.classList.remove(styles.active);
            mediumBtn.classList.remove(styles.active);
            largeBtn.classList.remove(styles.active);
            if (v == "large") {
                largeBtn.classList.add(styles.active);
            } else if (v == "medium") {
                mediumBtn.classList.add(styles.active);
            } else if (v == "small") {
                smallBtn.classList.add(styles.active);
            }
            window.localStorage.setItem("font-size", v);
            document.body.classList.remove("small-font", "medium-font", "large-font");
            document.body.classList.add(v + "-font");
        }
    }, []);
    const setDesign = useCallback((v: string) => {
        if (typeof window == "undefined") {
            return () => {
            }
        }
        return () => {
            setDesignState(v);
            window.localStorage.setItem("design", v);
            document.body.classList.remove("apple", "google", "ibm");
            document.body.classList.add(v);
        }
    }, []);
    const setTheme = useCallback((v: string) => {
        if (typeof window == "undefined") {
            return () => {
            }
        }
        window.localStorage.setItem("theme", v);
        document.body.classList.remove("dark", "light");
        document.body.classList.add(v);
    }, []);
    const setTint = useCallback((v: string) => {
        if (typeof window == "undefined") {
            return () => {
            }
        }
        return () => {
            window.localStorage.setItem("tint", v);
            document.body.classList.remove(
                "blue",
                "purple",
                "orange",
                "green",
                "red",
                "teal",
                "cyan",
                "indigo",
                "mint",
                "red",
                "yellow",
                "pink"
            );
            document.body.classList.add(v);
        }
    }, []);

    useEffect(()=>{
        const onResize = ()=>{
            setWindowWidth(window.innerWidth);
        }
        onResize();
        window.addEventListener("resize", onResize);
        return ()=>{
            window.removeEventListener("resize", onResize)
        }
    }, []);

    if (windowWidth <= 900){
        return <></>
    }

    return (
        <section className={`${styles.themeModalContainer} showOnShowSettings`}>
            <div className={styles.themeModal}>
                <div className={styles.modalBar}>
                    <IoMdCloseCircle onClick={() => {
                        if (typeof document == "undefined") {
                            return
                        }
                        document.body.classList.remove("lock-scroll", "showSettingsModal", "waitingForSettingsModal")
                    }}/>
                    <h1 className={'p text-center'}>
                        {locale_strings.title}
                    </h1>
                    <IoMdCloseCircle className={styles.disappear}/>
                </div>
                <section className={styles.themeFields}>
                    <div>
                        <div>
                            <p>
                                {locale_strings.mode}
                            </p>
                        </div>
                        <div>
                            <FilledButton className={`${styles.modeButton} ${design == 'apple' ? styles.active : ''}`}
                                          onClick={setDesign("apple")}>
                                {locale_strings.friendly}
                            </FilledButton>
                            <FilledButton className={`${styles.modeButton} ${design == 'google' ? styles.active : ''}`}
                                          onClick={setDesign("google")}>
                                {locale_strings.standard}
                            </FilledButton>
                            <FilledButton className={`${styles.modeButton} ${design == 'ibm' ? styles.active : ''}`}
                                          onClick={setDesign("ibm")}>
                                {locale_strings.serious}
                            </FilledButton>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>{locale_strings.darkMode}</p>
                        </div>
                        <div className={styles.switchBoxContainer}>
                            <SwitchBox
                                defaultValue={(typeof window !== "undefined" && window.localStorage.getItem('theme') == "dark")}
                                onToggle={() => {
                                    if (window.localStorage.getItem("theme") == "light") {
                                        setTheme("dark");
                                    } else {
                                        setTheme("light");
                                    }
                                }}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>{locale_strings.tint}</p>
                        </div>
                        <div className={styles.tintContainer}>
                            {
                                ["blue", "cyan", "green", "indigo", "mint", "orange",
                                    "pink", "purple", "red", "teal", "yellow"].map(i => (
                                    <button key={i} className={`${styles.tintButton} ${i}-tint-background`}
                                            onClick={setTint(i)}/>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>{locale_strings.fontSize}</p>
                        </div>
                        <div>
                            <FilledButton id={"theme-modal-font-size-small"}
                                          className={`${styles.modeButton} ${fontSize == "small" ? styles.active : null}`}
                                          onClick={setFontSize("small")}>
                                {locale_strings.small}
                            </FilledButton>
                            <FilledButton id={"theme-modal-font-size-medium"}
                                          className={`${styles.modeButton} ${fontSize == "medium" ? styles.active : null}`}
                                          onClick={setFontSize("medium")}>
                                {locale_strings.medium}
                            </FilledButton>
                            <FilledButton id={"theme-modal-font-size-large"}
                                          className={`${styles.modeButton} ${fontSize == "large" ? styles.active : null}`}
                                          onClick={setFontSize("large")}>
                                {locale_strings.large}
                            </FilledButton>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default ThemeModal;