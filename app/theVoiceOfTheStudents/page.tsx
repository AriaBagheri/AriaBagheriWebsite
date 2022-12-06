import React from 'react';
import Page from "../../src/slim/Page";
import Image from "next/image";
import TheVoiceOfTheStudentsIntroComponent
    from "../../src/components/theVoiceOfTheStudents/TheVoiceOfTheStudentsIntroComponent";

function TheVoiceOfTheStudentsPage() {
    return (
        <Page>
            <TheVoiceOfTheStudentsIntroComponent/>
        </Page>
    );
}

export default TheVoiceOfTheStudentsPage;