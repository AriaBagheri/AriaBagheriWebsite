import React from 'react';
import Section from "../../slim/Section";
import styles from "../../../styles/components/projects/ProjectsListComponent.module.scss";
import {projects} from "../../localDB/projects";

function ProjectsListComponent({query}: {query: string}) {
    return (
        <Section isPadded={true} className={styles.container} padSize={"small"}>
            <div className={styles.projectList}>
                {
                    projects.map(i => (
                        <article key={i.id} className={styles.project}>
                            <h2>{i.title}</h2>
                            {i.animation}
                            <p>{i.shortSummary}</p>
                            <a className={'button button-filled'} href={i.link}>
                                Learn More
                            </a>
                        </article>
                    ))
                }
            </div>
        </Section>
    );
}

export default ProjectsListComponent;