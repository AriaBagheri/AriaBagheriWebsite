'use client';
import React, {useEffect, useRef, useState} from 'react';
import styles from "../../../styles/components/cyberKnowledge/CyberKnowledgeBodyComponent.module.scss";
import Image from "next/image";

function CyberKnowledgeGoalsComponent() {
    const imageRef = useRef<any>();
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        const scrollable = document.getElementById("scrollable-body");
        if (!scrollable) {
            return
        }

        const onScroll = () => {
            if (!imageRef.current) {
                return
            }
            const scrollPercentage = 100 * Math.min(1, Math.max(0, (scrollable.scrollTop - imageRef.current.offsetTop - 300) / window.innerHeight));
            setIsInView(scrollPercentage < 0.9)
        }
        onScroll();
        scrollable.addEventListener("scroll", onScroll);
        return () => {
            scrollable.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <section className={styles.containerInner}>
            <h1 className={'cursive'}>Goals</h1>
            <div>
                <div className={styles.text}>
                    <div>
                        <h2>Protect The United States of America</h2>
                        <p>
                            Our mission is to safeguard the security of our nation's cyber infrastructure by providing
                            the highest quality training and education to our country's cyber defense professionals.
                            We are committed to developing the skills and expertise of our nation's cyber defenders,
                            empowering them to protect themselves, their companies, and our government and critical
                            infrastructure from a wide range of digital threats.
                            As the front line of defense against those who seek to harm our country and its citizens, we
                            take our responsibility to train and support our cyber warriors seriously.
                            We are proud to serve our nation and to help ensure that our cyber security remains strong
                            and resilient.
                        </p>
                    </div>
                </div>
                <div ref={imageRef} className={styles.imageContainer}>
                    <Image src={"/AmericanFlag.png"}
                           className={`${styles.imageBig} ${isInView ? "" : styles.imageDisappear}`} alt={""}
                           width={1820}
                           height={1820 * 9 / 16}/>
                </div>
            </div>
        </section>
    );
}

export default CyberKnowledgeGoalsComponent;