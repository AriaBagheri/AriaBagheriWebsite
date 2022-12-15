import "../styles/globals.css";
import "../styles/slim/slim.scss";
import ThemeManager from "../src/slim/ThemeManager";
import AnimationManager from "../src/slim/AnimationManager";
import React from "react";
import NavigationBar from "../src/components/layout/NavigationBar";
import Footer from "../src/components/layout/Footer";
import ExpandableMobileNavigationMenu
    from "../src/slim/components/ExpandableMobileNavigationMenu/ExpandableMobileNavigationMenu";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Pacifico&display=swap"
                rel="stylesheet"/>
        </head>
        <body dir={"ltr"} className={`body-with-expandable-navbar-mobile apple dark blue medium-font`}>
        <div className={'body'}>
            <div id={'scrollable-body'}>
                <ThemeManager/>
                <AnimationManager/>
                <NavigationBar/>
                {children}
                <Footer/>
            </div>
        </div>
        <ExpandableMobileNavigationMenu/>
        </body>
        </html>
    )
}
