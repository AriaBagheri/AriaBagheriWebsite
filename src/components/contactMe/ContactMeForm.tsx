import React from 'react';
import Section from "../../slim/Section";
import styles from "../../../styles/components/contactMe/ContactMeForm.module.scss";

function ContactMeForm() {
    return (
        <Section isPadded={true} padSize={"medium"} className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={"/Profile_1.png"} className={styles.image} alt={""}/>
            </div>
            <form className={styles.form}>
                <header>
                    <h1 className={"h6"}>Contact Me</h1>
                </header>
                <div className={styles.body}>
                    <input placeholder={"Name"}/>
                    <input placeholder={"Email"}/>
                    <textarea placeholder={"Message"}/>
                </div>
                <footer>
                    <button>
                        Submit
                    </button>
                </footer>

            </form>
        </Section>
    );
}

export default ContactMeForm;