import React from 'react';
import styles from "../../../styles/components/cyberKnowledge/CyberKnowledgeTop5VidsComponent.module.scss";
import Link from "next/link";

function CyberKnowledgeTop5VidsSection() {
    return (
        <section className={styles.container}>
            <Link href={"https://www.youtube.com/channel/UCwChJ8ZfZRmy3Z5nXqBMsVQ"}>
                <h1 className={'text-center cursive'}>YouTube Channel</h1>
            </Link>
        </section>
    );
}

export default CyberKnowledgeTop5VidsSection;