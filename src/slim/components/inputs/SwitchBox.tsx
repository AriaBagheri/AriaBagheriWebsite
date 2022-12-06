import React from 'react';
import styles from "../../../../styles/slim/design/components/SwitchBox.module.scss";

function SwitchBox({defaultValue, onToggle}: {
    defaultValue: boolean,
    onToggle: () => void
}) {
    return (
        <div className={styles.switchContainer}>
            <label className={styles.switch}>
                <input type="checkbox" defaultChecked={defaultValue} onInput={onToggle}/>
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </div>
    );
}

export default SwitchBox;