import React from 'react';
import Page from "../../src/slim/Page";
import CyberKnowledgeIntroComponent from "../../src/components/cyberKnowledge/CyberKnowledgeIntroComponent";
import CyberKnowledgeBodyComponent from "../../src/components/cyberKnowledge/CyberKnowledgeBodyComponent";
import CyberKnowledgeTop5VidsSection from "../../src/components/cyberKnowledge/CyberKnowledgeTop5VidsSection";

function CyberKnowledge() {
    return (
        <Page>
            <CyberKnowledgeIntroComponent/>
            <CyberKnowledgeBodyComponent/>
            <CyberKnowledgeTop5VidsSection/>
        </Page>
    );
}

export default CyberKnowledge;