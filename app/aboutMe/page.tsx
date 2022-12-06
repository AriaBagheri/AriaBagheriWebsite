import React from 'react';
import AboutMeComponent from "../../src/components/aboutMe/AboutMeComponent";
import SkillsComponent from "../../src/components/aboutMe/SkillsComponent";
import ProjectsComponent from "../../src/components/aboutMe/ProjectsComponent";
import CertificatesComponent from "../../src/components/certificates/CertificatesComponent";
import Page from "../../src/slim/Page";
import WhoAmIComponent from "../../src/components/aboutMe/WhoAmIComponent";
import SeaVideoBackground from "../../src/components/aboutMe/SeaVideoBackground";
import AboutMeIntroComponent from "../../src/components/aboutMe/AboutMeIntroComponent";

function AboutMePage() {
    return (
        <SeaVideoBackground>
            <Page isPadded={false} padSize={'small'}>
                <AboutMeIntroComponent/>
                <AboutMeComponent noLearnMore={true} noTitle={true}/>
                <WhoAmIComponent/>
                <SkillsComponent/>
                <ProjectsComponent/>
                <CertificatesComponent/>
            </Page>
        </SeaVideoBackground>
    );
}

export default AboutMePage;