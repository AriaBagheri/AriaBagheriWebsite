import React from 'react';
import shapeDivider from "../../../styles/components/ShapeDivider.module.scss";
import StarsVideoBackground from "./StarsVideoBackground";
import styles from "../../../styles/components/home/HomeIntroComponent.module.scss";

function HomeIntroComponent() {
    return (
        <StarsVideoBackground>
            <h1 className={styles.title}>Hello, I am Aria Bagheri</h1>
            <h2 className={`h6 cursive ${styles.description}`}>Welcome to My World!</h2>
            <div className={shapeDivider.bottom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill={"var(--background-color)"}></path>
                </svg>
            </div>
        </StarsVideoBackground>
    );
}

export default HomeIntroComponent;