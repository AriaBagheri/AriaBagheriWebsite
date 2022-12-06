import LottieWrapper from "../components/LottieWrapper";
import rocketAnimationLottie from "../../public/88140-rocket-livetrade.json";
import styles from "../../styles/components/aboutMe/ProjectsComponent.module.scss";
import React from "react";
import hospitalAnimationLottie from "../../public/101571-pediatrics.json";
import securityAnimationLottie from "../../public/53997-security.json";

export const projects = [
    {
        id: "SlimLibrary",
        title: "SlimLibrary",
        summary: "Slim Library is one of the most comprehensive UI/UX frameworks for Next.js. With most of the code written in well-optimized SCSS module files, the unused CSS is minimized. At the same time, various components inspired by Apple's Human Interface Design Guidelines, Google's Material Design, and IBM's Carbon Design are included and ready to use.",
        description: "In the winter of 2022, I teamed up with AlessioRomeo.dev to develop one of the most comprehensive UI/UX frameworks for Next.js. With most of the code written in well-optimized SCSS module files, the unused CSS is minimized. At the same time, various components inspired by Apple's Human Interface Design Guidelines, Google's Material Design, and IBM's Carbon Design are included and ready to use. As a cherry on top, these components utilize the server-component API in React 18 to boost performance, minimize server costs, and provide visitors with a mind-blowing user experience. All this while giving them the freedom and flexibility to customize the entire UI to their liking. ",
        animation: <LottieWrapper animationData={rocketAnimationLottie} loop={true}
                                  className={styles.slimLibraryAnimation}/>

    },
    {
        id: "PatientManagementSystem",
        title: "Patient Management System",
        summary: "In 2017, I used C# and MySQL to make a patient management system for a private gynecology office to manage patient records, appointments, and files. This full-stack project utilized AES-256 and SHA-256 to secure the patient's database and prevent unauthorized access while at the same time being easy to use for the average Joe.",
        description: "",
        animation: <LottieWrapper animationData={hospitalAnimationLottie} loop={true}
                                  className={styles.hospitalAnimation}/>
    },
    {
        id: "BiometricSecuritySystem",
        title: "Biometric Building Security System",
        summary: "After learning how easy it was to defeat locks and get around various security measures, I was determined to make the perfect security system. Soon enough, I realized all locks have vulnerabilities, and an ideal system removes the locks altogether. So I used the power of machine learning and AI to track employees throughout the building, then only let them use their IDs if they had a clear path throughout the building from the point of entry and ....",
        animation: <LottieWrapper animationData={securityAnimationLottie} loop={true}
                                  className={styles.securityAnimation}/>

    }
]