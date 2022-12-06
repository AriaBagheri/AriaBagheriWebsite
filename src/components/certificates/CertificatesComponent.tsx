import React from 'react';
import styles from "../../../styles/components/certificates/Certificates.module.scss";
import Section from "../../slim/Section";
import Image from "next/image";
import {certificates} from "../../localDB/certificates";
import Link from "next/link";

function CertificatesComponent() {
    return (
        <Section isPadded={true} padSize={"small"} className={styles.container}>
            <h1 className={styles.title}>
                Certifications
            </h1>
            <div className={styles.certificatesContainer}>
                {
                    certificates.sort((a, b)=> a.priority - b.priority).reverse().slice(0, 5).map(i => (
                        <article key={i.id}>
                            <Image width={250 * 16 / 12} height={250} src={i.thumbnail_url} alt={""}/>
                            <div className={styles.certificateTextContainer}>
                                <h2>{i.title}</h2>
                                <h3>{i.from}</h3>
                                <p>{i.date}</p>
                            </div>
                        </article>
                    ))
                }
            </div>
            <Link className={'button'} href={"/certificates"}>
                See More!
            </Link>
        </Section>
    );
}

export default CertificatesComponent;