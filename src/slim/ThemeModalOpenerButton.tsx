'use client';
import React, {useEffect, useState} from 'react';
import {IoSettings} from "react-icons/io5";

function ThemeModalOpenerButton({className}: any) {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(()=>{
        const onResize = ()=>{
            setWindowWidth(window.innerWidth);
        }
        onResize();
        window.addEventListener("resize", onResize);
        return ()=>{
            window.removeEventListener("resize", onResize)
        }
    }, []);

    if (windowWidth <= 900){
        return <></>
    }
    return (
        <button className={`no-button ${className}`} onClick={() => {
            document.body.classList.add("showSettingsModal", "lock-scroll");
        }}>
            <IoSettings className={'h6'}/>
        </button>
    );
}

export default ThemeModalOpenerButton;