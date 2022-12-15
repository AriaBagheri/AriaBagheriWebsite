'use client';
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import styles from "../../../styles/components/cyberKnowledge/CyberKnowledgeIntroComponent.module.scss";

function CyberKnowledgeIntroComponent() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    useEffect(()=>{
        const scrollable = document.getElementById("scrollable-body");
        if (!scrollable){
            return
        }
        const onScroll = ()=>{
            setScrollPercentage(scrollable.scrollTop / window.innerHeight);
        }
        onScroll();
        scrollable.addEventListener("scroll", onScroll);
        scrollable.addEventListener("resize", onScroll);
        return () => {
            scrollable.removeEventListener("scroll", onScroll);
            scrollable.removeEventListener("resize", onScroll);
        }
    }, []);
    return (
        <section className={`${styles.container} dark`}>
            <div>
                <h1 className={'cursive'} style={{
                    transform: `scale(${0.75 + scrollPercentage}) translateY(${-Math.min(200 * scrollPercentage, 150)}px)`
                }}>
                    Cyber Knowledge
                </h1>
            </div>
            <Image src={"/KnowledgeBaseBackground.jpg"} width={1920} height={1080} alt={""}/>
            <div className={styles.overlay}/>
        </section>
    );
}

export default CyberKnowledgeIntroComponent;