import React from 'react';
import Section from "../../slim/Section";
import styles from "../../../styles/components/aboutMe/AboutMeSection.module.scss";
import Link from "next/link";

function AboutMeComponent({noLearnMore = false, noTitle = false}: { noLearnMore?: boolean, noTitle?: boolean }) {
    return (
        <Section id={"aboutMe"} isPadded={true} padSize={'small'} className={styles.container}>
            {
                !noTitle && (
                    <h1>About Me</h1>
                )
            }
            <article className={styles.aboutMeContent}>
                <div className={styles.profileContainer}>
                    <svg viewBox="0 0 643 643" width={500} height={500} style={{
                        transform: `scale(calc(0.7 + (720 - 100vw) * (0.7 - 1.7) / (720 - 1920)))`
                    }}>
                        <defs>
                            <clipPath id="shape">
                                <path fill="none"
                                      style={{
                                          transform: "scale(5.115) translate(8.6%, 12%)"
                                      }}
                                      preserveAspectRatio={"xMidYMid meet"}
                                      d="M68.7,-28.8C74.3,-4.8,54.2,21.1,31.9,35.3C9.5,49.5,-15,52,-31.5,40.6C-48,29.3,-56.5,4.1,-49.9,-21.2C-43.3,-46.5,-21.7,-71.8,4.9,-73.4C31.5,-75,63,-52.9,68.7,-28.8Z"
                                />
                            </clipPath>
                        </defs>
                        <image width="643" height="643" clipPath="url(#shape)"
                               href="/profilePicture.jpeg">
                        </image>

                    </svg>
                </div>
                <div className={styles.aboutMeText}>
                    <h2>I am Aria Bagheri</h2>
                    <p>
                        I am Aria Bagheri. A passionate student of clean coding that takes code security seriously. A
                        fast learner that spends more time profiling and optimizing the code than writing code. I live
                        in New York and study what I am passionate about (Hint: It's Computer Science)! I keep my skills
                        sharp and lose sleep over the slightest problems in my code.
                    </p>
                    {
                        !noLearnMore && (
                            <Link href={"/aboutMe"} className={'button'}>
                                Learn More!
                            </Link>
                        )
                    }
                </div>
            </article>

        </Section>
    );
}

export default AboutMeComponent;