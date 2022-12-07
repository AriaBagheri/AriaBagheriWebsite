'use client';
import React, {useEffect, useRef, useState} from 'react';
import styles from "../../../styles/components/cyberKnowledge/CyberKnowledgeBodyComponent.module.scss";
import Image from "next/image";

function CyberKnowledgeGoalsComponent() {
    const imageRef = useRef<any>();
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (!imageRef.current) {
                return
            }
            const scrollPercentage = 100 * Math.min(1, Math.max(0, (window.scrollY - imageRef.current.offsetTop - 300) / window.innerHeight));
            setIsInView(scrollPercentage < 0.9)
        }
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <section className={styles.containerInner}>
            <h1 className={'cursive'}>Goals</h1>
            <div>
                <div className={styles.text}>
                    <div>
                        <h2>Protect The United States of America</h2>
                        <p>The Cyber Knowledge Base aims to provide comprehensive cyber security defense training to
                            people, either outside or inside the field of cyber security, to protect themselves,
                            their
                            companies, and their country from the growing cyber threats.</p>
                    </div>
                </div>
                <div ref={imageRef} className={styles.imageContainer}>
                    <Image src={"/AmericanFlag.png"} className={`${styles.imageBig} ${isInView ? "" : styles.imageDisappear}`} alt={""} width={1820}
                           height={1820 * 9 / 16}/>
                    <Image src={"/AmericanFlag.png"} alt={""} className={`${isInView ? styles.imageDisappear : ""}`}  width={1820} height={1820 * 9 / 16}/>
                </div>
            </div>
        </section>
    );
}

export default CyberKnowledgeGoalsComponent;