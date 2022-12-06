import React from 'react';
import Section from "../../slim/Section";
import styles from "../../../styles/components/layout/Footer.module.scss";
import {AiFillInstagram} from "react-icons/ai";
import {BsYoutube} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
import {ImGithub} from "react-icons/im";

function Footer() {
    return (
        <footer className={styles.container}>
            <Section isPadded={true} padSize={"small"} className={styles.section}>
                <div>
                    <h1>Aria Bagheri</h1>
                </div>
                <div className={styles.socials}>
                    <a href={"https://t.me/anintellectualhumanbeing"}>
                        <FaTelegramPlane/>
                    </a>
                    <a href={"https://www.instagram.com/theactualariabagheri/"}>
                        <AiFillInstagram/>
                    </a>
                    <a href={"https://github.com/ariabagheri"}>
                        <ImGithub/>
                    </a>
                    <a href={"https://www.youtube.com/channel/UCwChJ8ZfZRmy3Z5nXqBMsVQ"}>
                        <BsYoutube/>
                    </a>
                </div>
            </Section>
        </footer>
    );
}

export default Footer;