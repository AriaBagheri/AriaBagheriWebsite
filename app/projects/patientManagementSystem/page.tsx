"use client";
import React, {useEffect, useRef} from 'react';
import Page from "../../../src/slim/Page";
import Section from "../../../src/slim/Section";
import Image from "next/image";
import styles from "../../../styles/components/projects/patientManagementSystem/PatientManagementSystem.module.scss";
import shapeDivider from "../../../styles/components/ShapeDivider.module.scss";
import convenienceAnimation from "../../../public/static/projects/patientManagementSystem/67025-business-analysis.json";
import securityAnimation from "../../../public/static/projects/patientManagementSystem/Cloud Computing Security.json";
import speedAnimation from "../../../public/static/projects/patientManagementSystem/90846-loading-rocket.json";
import uiUxAnimation from "../../../public/static/projects/patientManagementSystem/Screen 2.json";
import hospitalAnimationLottie from "../../../public/101571-pediatrics.json";
import LottieWrapper from "../../../src/components/LottieWrapper";
import interpolate from "../../../src/slim/helpers/interpolate";

function PatientManagementSystemPage() {
    const convenienceAnimationRef = useRef<HTMLDivElement>(null);
    const convenienceTextRef = useRef<HTMLDivElement>(null);
    const securityAnimationRef = useRef<HTMLDivElement>(null);
    const securityTextRef = useRef<HTMLDivElement>(null);
    const speedAnimationRef = useRef<HTMLDivElement>(null);
    const speedTextRef = useRef<HTMLDivElement>(null);
    const uiUxAnimationRef = useRef<HTMLDivElement>(null);
    const uiUxTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollable = document.getElementById("scrollable-body");
        if (!scrollable){
            return
        }
        
        const onScroll = () => {
            if (!convenienceTextRef.current || !convenienceAnimationRef.current ||
                !securityAnimationRef.current || !securityTextRef.current ||
                !speedAnimationRef.current || !speedTextRef.current ||
                !uiUxAnimationRef.current || !uiUxTextRef.current
            ) {
                return
            }
            if (window.innerWidth < 1000){
                convenienceTextRef.current.setAttribute("style", "");
                convenienceAnimationRef.current.setAttribute("style", "");
                securityTextRef.current.setAttribute("style", "");
                securityAnimationRef.current.setAttribute("style", "");
                speedTextRef.current.setAttribute("style", "");
                speedAnimationRef.current.setAttribute("style", "");
                uiUxTextRef.current.setAttribute("style", "");
                uiUxAnimationRef.current.setAttribute("style", "");
                return;
            }
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            let animation_x = [vh - 500, 2 * vh-400, 2 * vh, 2 * vh + 100];
            convenienceAnimationRef.current.setAttribute(
                "style",
                `transform: translateY(${interpolate(scrollable.scrollTop, animation_x, [vh * 0.3, 0, 0, -vh * 0.3])}px) scale(${interpolate(scrollable.scrollTop, animation_x, [1, 1.1, 1.1, 1])}); opacity: ${interpolate(scrollable.scrollTop, animation_x, [0, 100, 100, 0])}%;`
            )
            convenienceTextRef.current.setAttribute(
                "style",
                `transform: translateY(${interpolate(scrollable.scrollTop, animation_x, [-vh * 0.3, 0, 0, vh * 0.3])}px); opacity: ${interpolate(scrollable.scrollTop, animation_x, [0, 100, 100, 0])}%;`
            )
            animation_x = [3 * vh - 500, 3 * vh - 400, 3 * vh, 3 * vh + 100];
            securityAnimationRef.current.setAttribute(
                "style",
                `transform: translateX(${interpolate(scrollable.scrollTop, animation_x, [-500, 0, 0, -500])}px) scale(${interpolate(scrollable.scrollTop, animation_x, [1, 1.1, 1.1, 1])}); opacity: ${interpolate(scrollable.scrollTop, animation_x, [0, 100, 100, 0])}%;`
            )
            securityTextRef.current.setAttribute(
                "style",
                `transform: translateX(${interpolate(scrollable.scrollTop, animation_x, [500, 0, 0, 500])}px); opacity: ${interpolate(scrollable.scrollTop, animation_x, [0, 100, 100, 0])}%;`
            )
            animation_x = [4 * vh - 500, 4 * vh - 400, 4 * vh, 4 * vh + 100];
            speedAnimationRef.current.setAttribute(
                "style",
                `transform: translateY(${interpolate(scrollable.scrollTop, animation_x, [500, 0, 0, -500])}px) scale(${interpolate(scrollable.scrollTop, animation_x, [1, 1.1, 1.1, 1])}); opacity: ${interpolate(scrollable.scrollTop, animation_x, [0, 100, 100, 0])}%;`
            )
            speedTextRef.current.setAttribute(
                "style",
                `transform: translateX(${interpolate(scrollable.scrollTop, animation_x, [-500, 0, 0, -500])}px); opacity: ${interpolate(scrollable.scrollTop, animation_x, [0, 100, 100, 0])}%;`
            )
            animation_x = [5 * vh - 500, 5 * vh - 400, 5 * vh, 5 * vh + 100];
            uiUxAnimationRef.current.setAttribute(
                "style",
                `transform: translateX(${interpolate(scrollable.scrollTop, animation_x, [-500, 0, 0, -500])}px) scale(${interpolate(scrollable.scrollTop, animation_x, [0.8, .9, .9, 0.8])}); opacity: ${interpolate(scrollable.scrollTop, animation_x, [0, 100, 100, 0])}%;`
            )
            uiUxTextRef.current.setAttribute(
                "style",
                `transform: translateX(${interpolate(scrollable.scrollTop, animation_x, [500, 0, 0, 500])}px); opacity: ${interpolate(scrollable.scrollTop, animation_x, [0, 100, 100, 0])}%;`
            )
        }
        onScroll();
        
        scrollable.addEventListener("scroll", onScroll);
        return () => {
            scrollable.removeEventListener("scroll", onScroll);
        }
    }, [convenienceAnimationRef.current]);

    return (
        <Page>
            <Section isPadded={false} padSize={"small"} className={styles.container}>
                <div className={styles.overlay}>
                    <h1>Patient Management System</h1>
                </div>
                <Image src={"/static/projects/patientManagementSystem/patientManagementSystem.cover.png"}
                       width={1920}
                       height={1080 * 0.5}
                       alt={""}/>
                <div id={styles.headerSVG} className={shapeDivider.bottom}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path fill={"var(--tint-main)"}
                              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                              opacity=".25" className="shape-fill"></path>
                        <path fill={"var(--tint-main)"}
                              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                              opacity=".5" className="shape-fill"></path>
                        <path fill={"var(--tint-main)"}
                              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                              className="shape-fill"></path>
                    </svg>
                </div>
            </Section>
            <Section isPadded={true} padSize={'medium'} className={styles.body}>
                <div className={styles.reverseContainer}>
                    <div className={styles.descriptionAnimation}>
                        <LottieWrapper animationData={hospitalAnimationLottie}
                                       loop={true}/>

                    </div>
                    <div className={styles.description}>
                        <h1>Patient Management System</h1>
                        <p>
                            I wrote a patient management system for a gynecologist's office in Iran in 2018. The system
                            was designed to help the office manage its patients more efficiently and store and organize
                            their information, including medical history, current medications, and test results. It also
                            helped assistants schedule appointments and manage patient schedules, as well as send
                            reminders about upcoming appointments and follow-up care. By streamlining these processes,
                            the system helped the office provide better patient care.
                        </p>
                    </div>
                </div>
                <div>
                    <div ref={convenienceTextRef}>
                        <h1 className={'h6'}>Convenience!</h1>
                        <p>This project was designed to provide a convenient, powerful, yet simple interface for the
                            doctor to input patient data.</p>
                    </div>
                    <div ref={convenienceAnimationRef} className={styles.convenienceAnimation}>
                        <LottieWrapper animationData={convenienceAnimation}
                                       loop={true}/>
                    </div>
                </div>
                <div className={styles.reverseContainer}>
                    <div ref={securityAnimationRef}>
                        <LottieWrapper animationData={securityAnimation}
                                       loop={true}/>
                    </div>
                    <div ref={securityTextRef}>
                        <h1 className={'h6'}>Military-Grade Security!</h1>
                        <p>Patient Information Stored On-Premise on Air-Gapped computers with AES-256 (Military
                            Grade) Encryption.</p>
                    </div>
                </div>
                <div>
                    <div ref={speedTextRef}>
                        <h1 className={'h6'}>Performance!</h1>
                        <p>
                            Written in C# with Code Efficiency in Mind!
                            Makes sure the doctor can input the patient data efficiently, and without risking data loss!
                        </p>
                    </div>
                    <div ref={speedAnimationRef}>
                        <LottieWrapper animationData={speedAnimation}
                                       loop={true}/>
                    </div>
                </div>
                <div className={styles.reverseContainer}>
                    <div ref={uiUxAnimationRef}>
                        <LottieWrapper animationData={uiUxAnimation}
                                       loop={true}/>
                    </div>
                    <div ref={uiUxTextRef}>
                        <h1 className={'h6'}>Clean User Interface!</h1>
                        <p>
                            The user interface for this project was designed to be intuitive, user-friendly, and easy to
                            navigate.
                            It featured a clean and modern design, with clear and concise menus and buttons that allow
                            the doctor and her assistants to quickly access the features and information they need.
                        </p>
                    </div>
                </div>
            </Section>
        </Page>
    );
}

export default PatientManagementSystemPage;