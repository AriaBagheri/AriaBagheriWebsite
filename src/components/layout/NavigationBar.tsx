import React from 'react';
import styles from "../../../styles/components/layout/Navbar.module.scss";
import Link from "next/link";
import ThemeModalOpenerButton from "../../slim/ThemeModalOpenerButton";

function NavigationBar() {
    return (
        <nav id={styles.container} className={'half-opaque-navbar'}>
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
            </div>
        </nav>
    );
}

export default NavigationBar;