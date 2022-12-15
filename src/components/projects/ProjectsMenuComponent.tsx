'use client';

import React, {useCallback, useState} from 'react';
import Section from "../../slim/Section";
import styles from "../../../styles/components/projects/ProjectsMenuComponent.module.scss";
import ProjectsListComponent from "./ProjectsListComponent";

function ProjectsMenuComponent() {
    const [option, setOptionState] = useState("all");

    const setOption = useCallback((v: string) => {
        return () => {
            setOptionState(v);
        }
    }, []);
    const getOptionClassName = useCallback((v: string) => {
        return option == v ? styles.active : "";
    }, [option]);

    return (
        <>
            <Section isPadded={true} className={styles.container} padSize={"large"}>
                <button onClick={setOption("all")} className={getOptionClassName("all")}>
                    All
                </button>
                <button onClick={setOption("ai")} className={getOptionClassName("ai")}>
                    Artificial Intelligence
                </button>
                <button onClick={setOption("websites")} className={getOptionClassName("websites")}>
                    Websites
                </button>
                <button onClick={setOption("apps")} className={getOptionClassName("apps")}>
                    Apps
                </button>
                <button onClick={setOption("apps")} className={getOptionClassName("apps")}>
                    Libraries
                </button>
                <button onClick={setOption("telegramBots")} className={getOptionClassName("telegramBots")}>
                    Database Management Systems
                </button>
            </Section>
            <ProjectsListComponent query={option}/>
        </>
    );
}

export default ProjectsMenuComponent;