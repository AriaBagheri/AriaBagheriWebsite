import React from 'react';
import Section from "../../slim/Section";
import styles from "../../../styles/components/home/HireMe.module.scss";
import Link from "next/link";

function HireMeSection() {
    return (
        <Section isPadded={true} padSize={"large"} className={styles.container}>
            <Link href={"https://t.me/anintellectualhumanbeing"} className={'button'}>
                Start a New Project !
            </Link>
        </Section>
    );
}

export default HireMeSection;