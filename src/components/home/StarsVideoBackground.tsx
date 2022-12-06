import React from 'react';
import styles from "../../../styles/components/home/StarsVideoBackground.module.scss";

function StarsVideoBackground({children}: {children: React.ReactNode}) {
    return (
        <>
            <video className={styles.video} src={"/home_video.mp4"} width={"100%"} height={"100%"} muted autoPlay loop/>
            <div className={styles.videoOverlay}>
                {children}
            </div>
        </>
    );
}

export default StarsVideoBackground;