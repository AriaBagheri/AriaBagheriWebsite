import React from 'react';
import Section from "../../slim/Section";
import styles from "../../../styles/components/contactMe/ContactMeIntroComponent.module.scss";
import shapeDivider from "../../../styles/components/ShapeDivider.module.scss";

function ContactMeIntroComponent() {
    return (
        <Section isPadded={true} padSize={"medium"} className={styles.container}>
            <div className={styles.overlay}/>
            <h1 className={"text-center"}>Contact Me</h1>
            <img src={"/ContactMePhoto.png"} width={"100%"} height={"40vh"}/>
            <div className={shapeDivider.bottom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path fill={"var(--background-color)"} d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </div>
        </Section>
    );
}

export default ContactMeIntroComponent;