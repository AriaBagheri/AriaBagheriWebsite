'use client';

import React, {useEffect} from 'react';

function ThemeManager() {
    useEffect(() => {
        const design = window.localStorage.getItem("design") || "apple";
        const theme = window.localStorage.getItem("theme") || "dark";
        const tint = window.localStorage.getItem("tint") || "blue";

        document.body.classList.remove("ibm", design == "apple" ? '_' : "apple", "google");
        document.body.classList.remove(theme == "dark" ? "_" : "dark", "light");
        document.body.classList.remove(tint == "blue" ? "_" : "blue", "purple", "orange", "green", "red", "teal");
        document.body.classList.add(design);
        document.body.classList.add(theme);
        document.body.classList.add(tint);
    }, []);
    useEffect(()=>{
        const onScroll = ()=>{
            if (window.scrollY >= 100){
                document.body.classList.add("page-scrolled");
            } else {
                document.body.classList.remove("page-scrolled");
            }
        }
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        }
    }, [])
    return (
        <></>
    );
}

export default ThemeManager;