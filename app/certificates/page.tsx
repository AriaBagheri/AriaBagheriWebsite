'use client';

import React, {useEffect, useState} from 'react';
import Page from "../../src/slim/Page";
import CertificatesIntroComponent from "../../src/components/certificates/CertificatesIntroComponent";
import styles from "../../styles/components/certificates/CertificatesPage.module.scss";
import {certificates} from "../../src/localDB/certificates";
import Image from "next/image";
import Section from "../../src/slim/Section";

const certificateFromList = Array.from(new Set(certificates.map(i => i.from))).sort((a, b) => a.length - b.length);

function CertificatesPage() {
    const [windowWidth, setWindowWidth] = useState(1920);
    const [mode, setMode] = useState("Kaggle");

    useEffect(() => {
        const onResize = () => {
            setWindowWidth(window.innerWidth);
        }
        onResize();
        window.addEventListener("resize", onResize);
        window.addEventListener("load", onResize);
        return () => {
            window.removeEventListener("load", onResize);
            window.removeEventListener("resize", onResize);
        }
    }, []);
    return (
        <Page>
            <CertificatesIntroComponent/>
            <Section isPadded={true} padSize={"small"} className={styles.mainComponent}>
                {
                    windowWidth >= 900 ? (
                        <div className={styles.certificateOptionsContainer}>
                            <button className={mode == "all" ? styles.active : ""} onClick={() => {
                                setMode("all")
                            }}>
                                All
                            </button>
                            {
                                certificateFromList.map(i => (
                                    <button key={i} className={mode == i ? styles.active : ""} onClick={() => {
                                        setMode(i);
                                    }}>
                                        {i}
                                    </button>
                                ))
                            }
                        </div>
                    ) : (
                        <></>
                    )
                }
                {
                    windowWidth >= 900 ? (
                        <section className={`${mode == "all" ? styles.certificates : styles.certificatesWithOption}`}>
                            {
                                mode == "all" ? (
                                    <>
                                        {
                                            certificates.map(i => (
                                                <article key={i.id}>
                                                    <Image width={200 * 16 / 9} height={200} src={i.thumbnail_url}
                                                           alt={""}/>
                                                    <div className={styles.certificateTextContainer}>
                                                        <h2>{i.title}</h2>
                                                        <h3>{i.from}</h3>
                                                        <p>{i.date}</p>
                                                    </div>
                                                </article>
                                            ))
                                        }
                                    </>
                                ) : (
                                    <>
                                        {
                                            certificates.filter(s => s.from == mode).map((i, index) => (
                                                <article className={index % 2 == 1 ? styles.reverse : ""}>
                                                    <Image src={i.thumbnail_url} width={300} height={300 / 16 * 9}
                                                           alt={""}/>
                                                    <section>
                                                        <h2>{i.title}</h2>
                                                        <h3 className={'p'}>{i.from}</h3>
                                                        <p>
                                                            {i.description.split("\n").map(m => (
                                                                <>
                                                                {m}
                                                                <br/>
                                                                </>
                                                            ))}
                                                        </p>
                                                    </section>
                                                </article>
                                            ))
                                        }
                                    </>
                                )
                            }
                        </section>
                    ) : (
                        <section className={styles.certificatesPhoneContainer}>
                            {
                                certificateFromList.map(i => (
                                    <div key={i}>
                                        <h2>{i}</h2>
                                        <div className={styles.certificatesPhone}>
                                            {
                                                certificates.filter(s => s.from == i).map(j => (
                                                    <article key={j.id} className={styles.certificateItem}>
                                                        <Image width={200 * 16 / 9} height={200} src={j.thumbnail_url}
                                                               alt={""}/>
                                                        <div className={styles.certificateTextContainer}>
                                                            <h2>{j.title}</h2>
                                                            <h3>{j.from}</h3>
                                                            <p>{j.date}</p>
                                                        </div>
                                                    </article>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </section>
                    )
                }
            </Section>
        </Page>
    );
}

export default CertificatesPage;