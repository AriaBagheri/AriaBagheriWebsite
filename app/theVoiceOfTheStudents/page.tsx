import React from 'react';
import Page from "../../src/slim/Page";
import TheVoiceOfTheStudentsIntroComponent
    from "../../src/components/theVoiceOfTheStudents/TheVoiceOfTheStudentsIntroComponent";
import Section from "../../src/slim/Section";

function TheVoiceOfTheStudentsPage() {
    return (
        <Page>
            <TheVoiceOfTheStudentsIntroComponent/>
            <Section isPadded={true} padSize={"medium"}>
                <p>
                    Hey there! Looking for a glimpse into the exciting world of Iranian student life in NYC? Tune in to
                    Ayeneh TV's new show "The Voice of the Students" for an inside look at the real-life experiences of
                    Iranian students in the city. Each episode features a different student, giving you a firsthand view
                    of what it's like to study and live in NYC. We'll also introduce you to some of the city's top
                    colleges and universities, and give you a sneak peek at student life on campus. Plus, we'll
                    interview professors and other experts to help you make informed decisions about your education.
                    Don't miss out on the action - tune in to Ayeneh TV and join the adventure!
                </p>
            </Section>
        </Page>
    );
}

export default TheVoiceOfTheStudentsPage;