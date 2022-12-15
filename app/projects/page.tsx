import React from 'react';
import Page from "../../src/slim/Page";
import ProjectsIntroComponent from "../../src/components/projects/ProjectsIntroComponent";
import ProjectsMenuComponent from "../../src/components/projects/ProjectsMenuComponent";

function ProjectsPage() {
    return (
        <Page>
            <ProjectsIntroComponent/>
            <ProjectsMenuComponent/>
        </Page>
    );
}

export default ProjectsPage;