'use client';
import React, {useEffect} from 'react';
import styles from "../../../styles/components/layout/Navbar.module.scss";
import Link from "next/link";
import ThemeModalOpenerButton from "../../slim/ThemeModalOpenerButton";
import {GiHamburgerMenu} from "react-icons/gi";

function NavigationBar() {
    useEffect(() => {
        const onResize = () => {
        }
        onResize();
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    return (
        <nav id={styles.container} className={'half-opaque-navbar'}>
            <button className={'no-button expandable-navbar-unexpand'} onClick={()=>{
                document.body.classList.remove("navbar-expanded");
            }}/>
            <div>
                <Link href={"/"}>
                    <h1 className={'h5'}>Aria Bagheri</h1>
                </Link>
                <Link className={styles.disappearOnSmall} href={"/aboutMe"}>
                    <p className={'h6'}>About Me</p>
                </Link>
                <Link className={styles.disappearOnMid} href={"/theVoiceOfTheStudents"}>
                    <p className={'h6'}>Voice of the Students</p>
                </Link>
            </div>
            <div>
                <Link href={"/cyberKnowledge"} className={styles.disappearOnSmall}>
                    <p className={`h6`}>Cyber Knowledge</p>
                </Link>
                <Link className={styles.disappearOnSmall} href={"https://github.com/AriaBagheri/"}>
                    <p className={'h6'}>Github</p>
                </Link>
                <ThemeModalOpenerButton className={styles.pushRightOnSmall}/>
                <button className={`no-button ${styles.appearOnMid}`} onClick={() => {
                    document.body.classList.add("navbar-expanded");
                }}>
                    <GiHamburgerMenu className={'h6'}/>
                </button>

            </div>
        </nav>
    );
}

export default NavigationBar;