import React from 'react';
import styles from "../../../styles/components/aboutMe/SeaVideoBackground.module.scss";

function SeaVideoBackground({children}: { children: React.ReactNode }) {
    return (
        <>
            <video className={styles.video}
                   src={"https://ariabagheristorage.s3.amazonaws.com/AboutMeVideoBackground.mp4"} width={"100%"}
                   height={"100%"} muted autoPlay loop/>
            <div className={styles.videoOverlay}>
                {children}
            </div>
        </>
    );
}

export default SeaVideoBackground;