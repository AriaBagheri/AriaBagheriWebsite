'use client';
import React, {useEffect} from 'react';

function AnimationManager() {
    useEffect(() => {
        // @ts-ignore
        const ram = navigator?.deviceMemory || 2;
        if (ram > 1 || window.localStorage.getItem("animated") == "T") {
            document.body.classList.add("animated");
        } else {
            document.body.classList.remove("animated");
        }
    }, []);
    return (
        <></>
    );
}

export default AnimationManager;