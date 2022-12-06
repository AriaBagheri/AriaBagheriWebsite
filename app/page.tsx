import "../public/plyr.css";
import React from 'react';
import Page from "../src/slim/Page";
import HomeIntroComponent from "../src/components/home/HomeIntroComponent";
import AboutMeComponent from "../src/components/aboutMe/AboutMeComponent";
import ProjectsComponent from "../src/components/aboutMe/ProjectsComponent";
import CertificatesComponent from "../src/components/certificates/CertificatesComponent";
import SkillsComponent from "../src/components/aboutMe/SkillsComponent";
import HireMeSection from "../src/components/home/HireMeSection";

function Index() {
    return <Page isPadded={false} padSize={'medium'}>
        <>
            <HomeIntroComponent/>
            <AboutMeComponent/>
            <SkillsComponent/>
            <ProjectsComponent/>
            <CertificatesComponent/>
            <HireMeSection/>
        </>
    </Page>
}


export default Index;