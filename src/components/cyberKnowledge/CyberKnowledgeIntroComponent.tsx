'use client';
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import styles from "../../../styles/components/cyberKnowledge/CyberKnowledgeIntroComponent.module.scss";

function CyberKnowledgeIntroComponent() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    useEffect(()=>{
        const onScroll = ()=>{
            setScrollPercentage(window.scrollY / window.innerHeight);
        }
        const onResize = ()=>{

        }
        onScroll();
        onResize();
        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        }
    }, []);
    return (
        <section className={styles.container}>
            <Image src={"/KnowledgeBaseBackground.jpg"} width={1920} height={1080} alt={""}/>
            <div className={styles.overlay}/>
            <div>
                <h1 className={'cursive'} style={{
                    transform: `scale(${0.75 + scrollPercentage}) translateY(${-Math.min(200 * scrollPercentage, 150)}px)`
                }}>
                    Cyber Knowledge
                </h1>
            </div>
        </section>
    );
}

export default CyberKnowledgeIntroComponent;