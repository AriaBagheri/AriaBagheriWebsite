'use client';

import React, {useEffect, useState} from 'react';
import Section from "../../slim/Section";
import styles from "../../../styles/components/aboutMe/SkillsComponent.module.scss";
import shapeDivider from "../../../styles/components/ShapeDivider.module.scss";
import Script from "next/script";

const skillsValues = [
    {name: "JS", value: 90, yearsOfExperience: 2015},
    {name: "React.JS", value: 100, yearsOfExperience: 2018},
    {name: "Next.JS", value: 100, yearsOfExperience: 2019},
    {name: "Python", value: 100, yearsOfExperience: 2013},
    {name: "Java", value: 90, yearsOfExperience: 2015},
    {name: "Rust", value: 60, yearsOfExperience: 2021},
    {name: "SQL", value: 90, yearsOfExperience: 2019},
    {name: "NoSQL", value: 90, yearsOfExperience: 2019},
    {name: "GraphQL", value: 70, yearsOfExperience: 2020},
    {name: "Photoshop", value: 80, yearsOfExperience: 2012},
    {name: "Figma", value: 70, yearsOfExperience: 2020},
    {name: "Resolve", value: 70, yearsOfExperience: 2020},
]

function SkillsComponent() {
    const [activeState, setActiveState] = useState(2);
    return (
        <Section isPadded={true} padSize={'small'} className={styles.container}>
            <canvas id={'skillsCanvas'} className={styles.canvasBackground}/>
            <Script src={"/skillsCanvasAnimation.js"} strategy={"lazyOnload"} async={true}/>
            <div className={styles.overlayBackground}/>
            <div className={shapeDivider.top}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path fill={"var(--background-color)"}
                          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                          opacity=".25" className="shape-fill"></path>
                    <path fill={"var(--background-color)"}
                          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                          opacity=".5" className="shape-fill"></path>
                    <path fill={"var(--background-color)"}
                          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                          className="shape-fill"></path>
                </svg>
            </div>
            <h1 className={'text-center cursive'}>Skills</h1>
            <div className={styles.speedometer}>
                <div className={styles.speedometerSVGContainer}>
                    <svg className={styles.speedometerSVG} viewBox="0 0 33.83098862 33.83098862"
                         xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="bubble-gradient-color">
                                <stop offset="0%" stopColor="var(--tint-main)"/>
                                <stop offset="100%" stopColor="var(--tint-underlay)"/>
                            </linearGradient>
                        </defs>
                        <circle className={styles.circle} strokeDasharray={`${skillsValues[activeState].value},100`}
                                cx={16.91549431} cy={16.91549431} r={15.91549431}/>
                    </svg>
                    <p className={styles.speedometerValue}>
                        {skillsValues[activeState].value}%
                    </p>
                </div>
                <div className={styles.moreDetail}>
                    <p>
                        {skillsValues[activeState].name}
                    </p>
                    <p>
                        Since {skillsValues[activeState].yearsOfExperience}
                    </p>
                </div>
            </div>
            <div className={styles.skills}>
                {
                    skillsValues.map((i, index) => (
                        <button key={i.name} className={activeState == index ? styles.active : ""} onMouseEnter={() => {
                            setActiveState(index);
                        }}>
                            {i.name}
                        </button>
                    ))
                }
            </div>
        </Section>
    );
}

export default SkillsComponent;